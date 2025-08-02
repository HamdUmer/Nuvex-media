import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
function Navbar() {
    const [mobiledraweropen, setmobiledraweropen] = useState(false);
    const togglenavbar = () => {
        setmobiledraweropen(!mobiledraweropen);
    }
    return (
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-7 mx-auto relative text-m">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                            <span id="navheading" className="text-xl tracking-tight">Nuvex Media</span>
                        </div>
                        <ul className="hidden lg:flex ml-14 space-x-12">

                            {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="hover:text-orange-500 transition-colors duration-200">
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={togglenavbar}>
                                {mobiledraweropen ? <X /> : <Menu />}
                            </button>
                        </div>

                    </div>
                    {mobiledraweropen && (<div className="fixed right-0 z-20
                     bg-neutral-900 w-full p-12  flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="py-4">
                                        <a href={item.href} className="hover:text-orange-500 transition-colors duration-200">{item.label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                       
                    </div>

                    )}
                </div>
            </nav>

        </>
    )
}

export default Navbar;
