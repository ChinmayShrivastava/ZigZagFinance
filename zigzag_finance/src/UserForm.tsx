import { useState } from 'react';

const UserForm = () => {

    // initiate a form
    const [form, setForm] = useState({
        vaultname: "",
        denominationasset: "",
        managementfee: "",
        exitfee: ""
    });

    // handle form entry changes
    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="vaultname">Vault Name</label>
                        </td>
                        <td>
                            <input type="text" name="vaultname" placeholder='MNY' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="denominationasset">Denomination Asset</label>
                        </td>
                        <td>
                            <input type="text" name="denominationasset" placeholder='DAI' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="managementfee">Management Fee</label>
                        </td>
                        <td>
                            <input type="text" name="managementfee" placeholder='--.--%' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="exitfee">Exit Fee</label>
                        </td>
                        <td>
                            <input type="text" name="exitfee" placeholder='--.--%' onChange={handleChange} />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default UserForm;