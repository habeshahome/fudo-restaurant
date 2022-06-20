import Nav from './Nav'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <> 
            <div className="bg-[#FAF7F2] max-w-screen-lg mx-auto flex-grow-0 px-8 lg:px-0"> 
                <Nav /> 
            <div> 
                <main> 
                    {children}
                </main>
            </div> 
            </div>
            
        </>
    )
}

export default Layout;