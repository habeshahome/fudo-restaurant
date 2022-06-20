import type {NextPage} from 'next'

const Form: NextPage = () => {

      // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
        name: event.target.name.value,
        email: event.target.email.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
            'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
        }

        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Registered user data: ${result.data}`)
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
                className="w-full border px-8 py-3 rounded-xl bg-yellow-500 border-yellow-500"
                >Get Started</button>
            </form> 
        </div>
        
    )
}
export default Form