import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Resume | Avishek Das",
  description: "Resume app of Avishek Das",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="container-fluid p-0">{children}</div>
        <Script
          src="https://kit.fontawesome.com/cc52db2e78.js"
          crossorigin="anonymous"
        ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
