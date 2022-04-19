import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./pages/Home/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import ServiceDetail from "./pages/Home/ServiceDetail/ServiceDetail";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Footer from "./pages/Shered/Footer/Footer";
import Header from "./pages/Shered/Header/Header";
import NotFound from "./pages/Shered/NotFound/NotFound";
import RequireAuth from "./pages/Shered/RequireAuth/RequireAuth";
import About from "./pages/Home/About/About";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
