/*
 * @Author: your name
 * @Date: 2021-05-17 14:34:55
 * @LastEditTime: 2021-05-17 16:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/App.js
 */
// import logo from "./logo.svg";
import "./App.css";
import { Link, Route,BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Page from "./components/page";

function App() {
  return (
    <div>
      <h1>react route</h1>
      <div className="App">
        {/* <BrowserRouter> */}
        <ul style={{ width: 300 }}>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/page">page</Link>
          </li>
        </ul>
        <div>
          {/* 注册路由 */}

          <Route path="/page" component={Page}></Route>
          <Route path="/home" component={Home}></Route>

          {/* <Home></Home>
          <Page></Page> */}
        </div>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
