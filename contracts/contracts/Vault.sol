pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    address public owner;
    uint public commission;
    uint public lastTradeTime;
    mapping(address => uint) public balances;
    mapping(address => uint) public redeemTime;
    mapping(address => bool) public whitelistedPools;
    IUniswapV2Router02 public uniswapRouter;
    IERC20 public protocolToken;

    struct Vote {
        uint256 voteCount;
        mapping(address => bool) voted;
    }

    mapping(address => Vote) public governanceVotes;

    constructor(address _uniswapRouter, address _protocolToken) {
        owner = msg.sender;
        commission = 0;
        lastTradeTime = 0;
        uniswapRouter = IUniswapV2Router02(_uniswapRouter);
        protocolToken = IERC20(_protocolToken);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyWhitelistedPool() {
        require(whitelistedPools[msg.sender] == true, "Only whitelisted pools are allowed");
        _;
    }

    function createVault(uint _commission) external {
        require(_commission <= 100, "Commission should be between 0 and 100");
        commission = _commission;
        owner = msg.sender;
        lastTradeTime = block.timestamp;
    }

    function deposit(uint amount) external {
        require(amount > 0, "Deposit amount should be greater than 0");
        balances[msg.sender] += amount;
        redeemTime[msg.sender] = block.timestamp + 1 days;
        protocolToken.transferFrom(msg.sender, address(this), amount);
    }

    function redeem() external {
        require(balances[msg.sender] > 0, "No balance to redeem");
        require(block.timestamp >= redeemTime[msg.sender], "Redemption is not available yet");
        
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        redeemTime[msg.sender] = 0;
        protocolToken.transfer(msg.sender, amount);
    }

    function tradeOnUniswap(address[] memory path, uint amountIn, uint amountOutMin) external onlyOwner onlyWhitelistedPool {
        require(block.timestamp - lastTradeTime >= 24 hours, "Only one trade per 24 hours is allowed");
        require(path.length >= 2, "Invalid trading path");
        
        uint[] memory amounts = uniswapRouter.swapExactTokensForTokens(amountIn, amountOutMin, path, address(this), block.timestamp + 1 days);
        lastTradeTime = block.timestamp;
        
        uint commissionAmount = amounts[amounts.length - 1] * commission / 100;
        uint tradeAmount = amounts[amounts.length - 1] - commissionAmount;
        protocolToken.transfer(owner, commissionAmount);
        balances[owner] += tradeAmount;
    }

    function setCommission(uint _commission) external onlyOwner {
        require(_commission <= 100, "Commission should be between 0 and 100");
        commission = _commission;
    }

    function setWhitelistedPool(address pool, bool isWhitelisted) external onlyOwner {
        whitelistedPools[pool] = isWhitelisted;
    }

    function voteForWhitelistedPool(address pool) external {
        require(whitelistedPools[pool] == false, "Pool is already whitelisted");
        require(protocolToken.balanceOf(msg.sender) > 0, "Insufficient voting power");

        Vote storage vote = governanceVotes[pool];
        require(!vote.voted[msg.sender], "Already voted");

        vote.voteCount += protocolToken.balanceOf(msg.sender);
        vote.voted[msg.sender] = true;
    }

    function executeWhitelistedPoolVote(address pool) external onlyOwner {
        Vote storage vote = governanceVotes[pool];
        require(whitelistedPools[pool] == false, "Pool is already whitelisted");
        require(vote.voteCount >= protocolToken.totalSupply() / 2, "Insufficient votes");
        whitelistedPools[pool] = true;
 }
}