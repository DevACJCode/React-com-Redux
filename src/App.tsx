import { Provider } from "react-redux";
import { OrderList } from "./components/OrderList";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <OrderList />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
