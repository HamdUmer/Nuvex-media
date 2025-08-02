import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";



function Hero() {
  return (
    <>
     <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Leading Digital  
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
             {" "}Marketing Agency
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Elevate your brand with content that connects, visuals that impress, 
            and digital strategies that drive real results. Get started today and make your mark online.
        </p>
     </div>
    </>
  )
}

export default Hero
