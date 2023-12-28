import Nav from './Nav';
import Footer from './Footer';
import '../app/globals.css'


const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
