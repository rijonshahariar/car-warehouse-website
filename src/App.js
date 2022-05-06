import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import AddCar from './pages/AddCar/AddCar';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/addcar"
          element={
            <AddCar></AddCar>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>


      </Routes>

      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
