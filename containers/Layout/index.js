import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='flex h-full w-full flex-col items-center bg-gray-100 px-8 py-4 lg:h-screen lg:max-h-screen lg:overflow-y-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
