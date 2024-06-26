import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import ReactQueryProvider from "./utils/libs/react-query/ReactQueryProvider";
import { store } from "@/utils/libs/redux/store";
import Router from "@/utils/libs/router";

function App() {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <Router />
        <Toaster position="top-right" reverseOrder={false} />
      </ReactQueryProvider>
    </Provider>
  );
}

export default App;
