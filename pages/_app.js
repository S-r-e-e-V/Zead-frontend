import "../assets/css/plugins/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../assets/scss/style.scss";
import Layout from "../components/layout";

import { AuthContextProvider, ProtectRoute } from "./context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        {/* <ProtectRoute> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </ProtectRoute> */}
      </AuthContextProvider>
    </>
  );
}
