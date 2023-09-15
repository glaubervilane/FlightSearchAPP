import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Footer, Navbar } from './components';
import  Home  from './components/Home';

function App() {
  return (
    <main className='flex-col justify-content'>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}


export default App;
