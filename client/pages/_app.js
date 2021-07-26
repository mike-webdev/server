import "../styles/globals.scss";
import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position="top-right" closeOnClick autoClose={2000} />
      <Header />
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
