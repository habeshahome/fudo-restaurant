import {NextPage} from 'next'
import { GetStaticProps } from 'next'

interface Posts{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostPage: NextPage<Posts> = (props) => {
    const {userId, id, title, body} = props

    return (
        <div> 
            <ul> 
                <li> userId: {userId}</li>
                <li> id: {id} </li>
                <li> titile: {title} </li>
                <li> body: {body} </li>
            </ul>    
        </div>
    )
}

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const data = await res.json()

    return {
        props: data
    }
}