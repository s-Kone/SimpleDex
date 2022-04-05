import  Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;