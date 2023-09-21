import './App.css';
import  homebg  from './assets/imgs/homebg.jpg';
import { Footer, Input } from './components';

function App() {
  return (
    <div className='relative min-h-[100vh] dark:bg-gray-700 dark:text-white'>
      <div className=" pb-[2.5rem]">
        <img src={homebg} alt="boat" height={29} className="" />
        <div className="md:px-12 ">
          <Input/>
        </div>
      </div>
      <div className=''>
      
      <Footer />
      </div>
    </div>
  );
}


export default App;
