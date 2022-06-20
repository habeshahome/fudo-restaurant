import Link from 'next/link'

const PageNotFound: NextPage<> = () => {
    return (
        <div className="h-1/2 text-center flex flex-col justify-center align-middle"> 
            <span className="text-7xl font-bold drop-shadow-xl tracking-wide p-4 border rounded-full w-48 shadow-md mx-auto"> 404 </span>
            <h1 className="py-8">
                Page Not Found
            </h1>
            <Link href="/">
                <a className="text-xl text-blue-700"> Go Back </a>
            </Link>
        </div>
        
    )
}

export default PageNotFound