// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from'./pages/Contact';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contacts" component={Contact} /> 
//       </Routes>
//     </Router>
//   );
// };
// export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <Routes>
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;