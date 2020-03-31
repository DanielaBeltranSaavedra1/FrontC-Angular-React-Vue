
import React from "react";

import App from "./App"
import{Provider} from "react-redux";
import Store from "./store";


const App2 = () => <Provider store={Store}> <App/> </Provider>
export default App2