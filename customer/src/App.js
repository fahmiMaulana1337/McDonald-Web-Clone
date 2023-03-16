import { RouterProvider } from "react-router-dom";
import router from './routes/router';
import './App.css';
import { Provider } from "react-redux";

import store from "./store/index"


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
