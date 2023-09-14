import  homebg  from "../assets/imgs/homebg.jpg"
import Input from "./Input"
import Navbar from "./Navbar"


const Home = () => {
  return (
    <>
      <Navbar />
      <div class="container" className=" relative h-32">
        <img src={homebg} alt="boat" height={29} className="" />
        <div className="md:px-12">
          <Input/>
        </div>
      </div>
    </>
  )
}

export default Home