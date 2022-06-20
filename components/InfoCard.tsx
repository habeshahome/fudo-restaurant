import {NextPage} from 'next'
import Image from 'next/image'

interface Props {
    id?: number
    slug: string;
    title: string;
    description: string;
    icon: string; 
    children?: React.ReactNode;
}

const InfoCard: NextPage<Props> = (props) => {

    const {id, slug, title, description, icon} = props

    return (
        <> 
            <div className={`flex flex-col shadow-lg justify-center pb-2  rounded-xl ${id == 1 ? 'bg-yellow-500': 'bg-white'}`}> 
               <div className="flex justify-center align-middle">
                   <div className="p-4 w-full flex justify-center align-middle">
                       <Image 
                            src={ "/img/" + icon.split('/').pop() } 
                            alt="Cart" 
                            width="56" 
                            height="56" />
                   </div>
                </div>
                <div className="flex flex-col justify-center text-center p-4">
                   <div className=""> 
                        <h4 className="font-bold"> {description} </h4>
                    </div>
                    <div className=""> 
                        <p> {title} </p> 
                    </div> 
                </div>
            </div> 
        </>
    )
}

export default InfoCard;