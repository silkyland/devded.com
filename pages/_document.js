import Document, { Head, Main, NextScript } from "next/document";
import Master from "../components/layout/Master";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Master>
            <Main />
            <NextScript />
          </Master>
        </body>
      </html>
    );
  }
}
