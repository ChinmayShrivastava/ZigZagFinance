

const launchApp = () => {
    
    return (
        <>
        <div className="absolute flex justify-center items-center top-1/2 left-1/2 gap-4 -translate-x-1/2">
          <a href="/investor"> <div className={`nav-link py-5 px-4 bg-gradient-to-br from-pink-600 to-purple-500 text-white rounded-xl font-bold hover:-translate-y-1  transition-all`} >
            Investor
          </div>
          </a>
          <a href="/manager">
          <div className={`nav-link py-5 px-4 bg-gradient-to-br from-pink-600 to-purple-500 text-white rounded-xl font-bold hover:-translate-y-1  transition-all`}>
            Manager
          </div>
          </a>
          </div>
        </>
    )

}

export default launchApp;