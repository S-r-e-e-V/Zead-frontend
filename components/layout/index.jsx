import Footer from "../footer/Footer";
import Header from "../header/Header";


const Layout = ({ children }) => {
    return (
        <div className="content bg-gray-200">
            <Header />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;