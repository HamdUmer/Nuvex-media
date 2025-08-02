import Navbar from "./components/navbar";
import Hero from "./components/hero.";
import "./index.css"
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-8xl mx-auto pt-20 px-10">
        <Hero />
      </div>
    </>
  )
}

export default App
