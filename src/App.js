import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from './Components/Genre';
import Movie from './Components/Movie';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Moviedetails from './Components/Moviedetails';
import Genredetails from './Components/Genredetails';
// app
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/movie' element={<Movie />}/>
        <Route exact path='/genre' element={<Genre />}/>
        <Route exact path='/moviedetail/:id' element={<Moviedetails />}/>
        <Route exact path='/genredetail/:id' element={<Genredetails />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
