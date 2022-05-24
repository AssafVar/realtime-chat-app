import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarTop from "./components/NavbarTop";
import { AuthProvider } from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route exact path="/home" element={<HomePage />}/> 
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
