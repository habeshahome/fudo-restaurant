import {NextPage} from 'next'
import Form from './Form'

interface Props {
    title: string;
    tagline: string;
    children?: React.ReactNode;
}

const RegForm: NextPage<Props> = (props) => {
    const {title, tagline} = props

    return (
        <div className="grid grid-cols-2 gap-1"> 
            <div>
                <h1 className="font-bold"> {title} </h1>
                <p> <br/> {tagline}  </p>
            </div> 
            <div> 
                <Form />
            </div>
        </div>
    )
}

export default RegForm 