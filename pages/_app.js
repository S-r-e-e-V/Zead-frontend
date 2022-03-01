import "../assets/css/plugins/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../assets/scss/style.scss";
// import "/assets/css/confirm-alert.css";
import "../assets/css/Alert.css";
import Layout from "../components/layout";

import AuthContextProvider, {
  Loading,
  ProtectRoute,
} from "./context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Loading>
          <ProtectRoute>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectRoute>
        </Loading>
      </AuthContextProvider>
    </>
  );
}
