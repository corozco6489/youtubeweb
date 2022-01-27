import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="app">
     <Home/>
     <About/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
