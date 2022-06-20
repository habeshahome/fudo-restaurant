import Nav from './Nav'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <> 
            <div className="bg-[#FAF7F2] max-w-screen-lg mx-auto flex-grow-0 px-8 lg:px-0"> 
                
                <Nav /> 

                <main> 
                    {children}
                </main>

                <footer className={styles.footer}>
                    <div className="py-4 text-xs text-gray-700 text-center w-full max-w-screen-lg"> 
                    <p> Copyright @ 2022 abcd. All Right Reserved. </p>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Layout;