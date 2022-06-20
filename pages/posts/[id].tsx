import { useRouter } from 'next/router'
import {NextPage} from 'next'
import { GetStaticProps } from 'next'

interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const SinglePost: NextPage<Post> = (props) => {
    const router = useRouter()
    const { pid } = router.query

 
    return (
        <div> 
            <ul> 
                 aaffff
            </ul>    
        </div>
    )
}

export default SinglePost;
 