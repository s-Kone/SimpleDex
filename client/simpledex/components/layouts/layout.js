import  Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <div className='content'>
        {children}
      </div>
    </>
  )
}

export default Layout;