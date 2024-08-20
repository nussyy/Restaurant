import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/Menu';


function App() {
return(
    <Router>
        <div className='App'>
            <Navbar/>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            </Routes>
            <Footer/>
        </div>
    </Router>
);
}
export default App;