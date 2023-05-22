import "@/styles/index.scss";
import Navbar from "@/components/Navbar";
import { RegisterProvider } from "@/context/RegisterId";
export default function App({ Component, pageProps }) {
  return (
    <>
      <RegisterProvider>
        <Navbar />
        <Component {...pageProps} />
      </RegisterProvider>
    </>
  );
}
