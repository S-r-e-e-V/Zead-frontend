import "../assets/css/plugins/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import "../assets/scss/style.scss";
import Layout from "../components/layout";


export default function MyApp({ Component, pageProps }){
    return (
        <>
            <Layout><Component {...pageProps} /></Layout>
        </>
    )

}