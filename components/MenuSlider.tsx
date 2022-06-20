import {NextPage} from 'next'
import Image from 'next/image'

const MenuSlider: NextPage = (props)=> {

    const {slug, name, icon } = props
    //console.log("Tab Icon: " + icon)
    return (
            <li className="mr-2">
                <a href={slug} className="flex flex-row items-center p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active:text-green-300">
                <Image 
                    src={ "/img/" + icon.split('/').pop() } 
                    alt="" 
                    width="32" 
                    height="32" 
                />
                    <h3 className="pl-4"> {name} </h3>
                </a>
            </li>
    )
}
export default MenuSlider

/** 

 */