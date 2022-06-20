import {NextPage} from 'next'

interface Props{
    title: string;
    url: string;
}

const Button: NextPage<Props> = (props) => {
    const {title, url} = props

    return (
        <> 
            <div className="border px-8 py-3 rounded-xl shadow-lg bg-yellow-500 border-yellow-500 tracking-wide">
                <p> { title } </p>     
            </div> 
        </>
    )
}
export default Button