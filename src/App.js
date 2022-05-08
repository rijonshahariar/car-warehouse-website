import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './pages/RequireAuth/RequireAuth'
import AddCar from './pages/AddCar/AddCar';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import Update from './pages/Update/Update';
import Footer from './pages/Footer/Footer';
import MyCars from './pages/MyCars/MyCars';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addcar"
          element={
            <RequireAuth>
              <AddCar></AddCar>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/mycar"
          element={
            <RequireAuth>
              <MyCars></MyCars>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
