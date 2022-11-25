import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/user/:id' element={<Profile />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    );
}

export default App;
