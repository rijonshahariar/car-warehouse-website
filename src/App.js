import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
