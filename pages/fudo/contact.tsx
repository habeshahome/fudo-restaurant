import {GetStaticProps, NextPage} from 'next'
import Image from 'next/image'

interface Category {
    message: string;
    statusCode: number;
    data: {
       id: number;
        slug: string;
        title: string;
        description: string;
        icon: string; 
    }[]
    
}

const FudoCategory: NextPage<Category> = (props) => {
    //console.log(props)
    const contactData = props.data
    //const {id, slug, title, description, icon } = props.data[0]
    return (
        <div> 
            { contactData.map((contact) => {
                return (
                    <div key={contact.slug} 
                    className="flex flex-col justify-center pb-2 bg-white rounded-xl"> 
               <div className="flex justify-center align-middle">
                   <div className="p-4 w-full flex justify-center align-middle">
                       <Image 
                            src={"/img/" + contact.icon.split('/').pop()}
                            alt={contact.slug} 
                            width="56" 
                            height="56" />
                            {console.log(contact.icon.split('/').pop()) }
                   </div>
                </div>
                <div className="flex flex-col justify-center text-center p-4">
                   <div className=""> 
                        <h3 className="font-bold"> {contact.title}</h3>
                    </div>

                    <div className=""> 
                        <p> {contact.description} </p> 
                    </div> 
                </div>
                
            </div> 
                     
                
                )
                              
            })}
        </div>
    )
}
export default FudoCategory

export const getStaticProps: GetStaticProps<typeof GetStaticProps> = async () => {
    const res = await fetch('http://localhost:3000/api/category')
    const data = await res.json()

    return {
        props: data
    }
}