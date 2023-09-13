import  homebg  from "../assets/imgs/homebg.jpg"
import Input from "./Input"
import Navbar from "./Navbar"


const Home = () => {
  return (
    <>
      <Navbar />
      <div class="container" className=" relative w-full h-32">
        <img src={homebg} alt="" height={29} />
        <div className=" text-center mx-auto text-white absolute inset-x-0 max-w-[1240px] top-0 h-[45%] text-4xl pt-11 sm:text-5xl md:text-6xl lg:text-8xl font-bold">
          
        </div>

      <div className="p-4 text-center text-3xl sm:text-5xl"> Flights </div>
      <Input/>
      </div>


      
      
    </>
  )
}

export default Home