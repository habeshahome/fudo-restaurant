import type {NextPage} from 'next'

const Form: NextPage = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        }
        const JSONdata = JSON.stringify(data)

        //const fudoSignUpUrl = "http://54.169.31.224:3000/signup"
        const endpoint = '/api/form' 

        const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSONdata,
            }

        const response = await fetch(endpoint, options)
        const result = await response.json()
        //console.log(result.data)

        alert(`Registered user data: \n\n ${result.data}`)
    }

    return (
        <div id="form-section" className="flex flex-col p-4 w-4/5 mx-auto">
            <div className="font-bold text-red-600 pb-2"> 
                <h2> Get Started for Free </h2>
            </div>

           <form className="" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className=" border border-gray-300 text-gray-900 text-md rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Name" 
                    required />
                </div>
                <div className="mb-6">
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className=" border border-gray-300 text-gray-900 text-md rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Email Address" 
                    required />
                </div>
                <div className="mb-6">
                    <input 
                    type="password" 
                    id="password" 
                    name="password"
                    className=" border border-gray-300 text-gray-900 text-md rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Password" 
                    required />
                </div>

                <button type="submit" 
                    className="w-full uppercase border px-8 py-3 rounded-xl bg-yellow-500 border-yellow-500"
                    >Get Started</button>
            </form> 
        </div>
        
    )
}
export default Form