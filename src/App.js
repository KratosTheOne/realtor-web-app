import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/profile"
            element={<Profile/>}
          />
          <Route 
            path="/offers"
            element={<Offers/>}
          />
          <Route 
            path="/sign-in"
            element={<SignIn/>}
          />
          <Route 
            path="/sign-up"
            element={<SignUp/>}
          />
          <Route 
            path="/forgot-password"
            element={<ForgotPassword/>}
          />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
