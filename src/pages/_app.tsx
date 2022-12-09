import React from "react";
import "antd/dist/reset.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

/**
 * App: The entry point
 * @return {JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
