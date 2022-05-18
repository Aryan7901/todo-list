import { TodoProvider } from "../store/TodoContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
