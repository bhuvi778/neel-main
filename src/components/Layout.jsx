import { useState } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Spinner from './Spinner';

function Layout({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Spinner />}
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
