import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  toast.configure({
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnHover: true,
    toastClassName: "toast-component",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
