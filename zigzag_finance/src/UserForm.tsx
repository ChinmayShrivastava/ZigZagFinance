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

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <div className="flex w-screen justify-center flex-column align-center h-screen items-center">
            <form className="bg-gray-800 component text-gray-400 text-right" onSubmit={onSubmit}>
                <table className="table py-4 px-2 text-white shadow-2xl">
                    <tr className='bg-gray-800 component py-6 px-2 text-gray-400 text-right'>
                        <th className="px-6 py-6">Management Information</th>
                    </tr>
                    <tr className={`bg-gray-700 component py-4 px-6 hover:bg-gray-600 hover:cursor-pointer font-light`} style={{borderRadius: "10px"}}>
                        <td className="px-6 py-6 flex justify-left">
                            <label htmlFor="vaultname">Vault Name</label>
                        </td>
                        <td className="px-6 py-6">
                            <input className='bg-transparent placeholder:opacity-60 w-full h-4/6 focus:outline-none placeholder:pl-2' type="text" name="vaultname" placeholder='MNY' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className={`bg-gray-700 component py-4 px-6 hover:bg-gray-600 hover:cursor-pointer font-light`} style={{borderRadius: "10px"}}>
                        <td className="px-6 py-6 flex justify-left">
                            <label htmlFor="managementfee">Management Fee</label>
                        </td>
                        <td className="px-6 py-6">
                            <input className='bg-transparent placeholder:opacity-60 w-full h-4/6 focus:outline-none placeholder:pl-2' type="text" name="managementfee" placeholder='--.--%' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className={`bg-gray-700 component py-4 px-6 hover:bg-gray-600 hover:cursor-pointer font-light`} style={{borderRadius: "10px"}}>
                        <td className="px-6 py-6 flex justify-left">
                            <label htmlFor="exitfee">Exit Fee</label>
                        </td>
                        <td className="px-6 py-6">
                            <input className='bg-transparent placeholder:opacity-60 w-full h-4/6 focus:outline-none placeholder:pl-2' type="text" name="exitfee" placeholder='--.--%' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className={`bg-gray-700 component py-4 px-6 font-light`}>
                        <td></td>
                        <td className="px-6 py-6 flex">
                            <button type='submit' className="buy-button bg-gray-400 rounded-2xl py-3 px-5 justify-self-end">Create</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default UserForm;