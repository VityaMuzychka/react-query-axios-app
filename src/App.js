import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
