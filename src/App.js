import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./component/Routes/Routes";
import axios from "axios";

function App() {

  // axios.defaults.baseURL = "http://server.treatmentola.com/";
  axios.defaults.baseURL = "http://localhost:3310";

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
