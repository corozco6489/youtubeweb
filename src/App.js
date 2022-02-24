import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Toggle from './components/toogle/Tooge';
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div    style={{
      background: darkMode ? "black" : "white",
      color: darkMode && "white",
    }}>
    <Toggle/>
     <Home/>
     <About/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
