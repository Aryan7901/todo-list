import { TodoProvider } from "../store/TodoContext";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Aryan's Todo List" />
      </Head>
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
