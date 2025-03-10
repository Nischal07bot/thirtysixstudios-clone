import "./index.css";
import Canvas from './Canvas';
import data from "./infodata";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';
import { useEffect,useState } from 'react';
import gsap from 'gsap';

function Home() {
    const [bgColor, setBgColor] = useState('#FD2C2A');
   const [showCanvas, setShowCanvas] = useState(false);
    const colors = ['#1a1a1a', '#2d3436', '#636e72', '#2c3e50', '#34495e', '#FD2C2A'];
    
    const handleClick = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.backgroundColor = randomColor;
        if(showCanvas){
            setShowCanvas(false);
        }
        else{
            setShowCanvas(true);
        }
        setBgColor(randomColor);
    };
    return (
        <>
        <div 
            className="w-full relative min-h-screen text-white cursor-pointer"
            onClick={handleClick}
        >
        <>
        <div className="w-full relative min-h-screen text-white">
            {/* Navigation Bar */}
            <div className="w-full h-screen relative z-[1]">
            <nav className=" p-8 flex justify-between z-50">
                <div className="brand text-2xl text-white font-regular">thirtysixstudios</div>
                <div className="links flex gap-10">
                    {["Home", "About", "Services", "Projects", "Contact"].map((link, index) => (
                        <Link
                            key={index}
                            to={`/${link.toLowerCase()}`}
                            className="text-md text-white hover:text-gray-300"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
            <div className="textcontainer w-full  px-[20%]">
                <div className="text w-[40%]">
                    <h3 className="text-4xl leading-[1.2] w-[85%]">
                    At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
                    </h3>
                    <p className="text-md w-[80%] mt-10 font-md">We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
                    <p className="text-md text-white mt-10 font-thin">Scroll</p>
                </div>
            </div>
            <div className="w-full absolute bottom-0 left-0 flex justify-center items-center">
                <h1 className="text-white text-[17rem] font-normal tracking-light leading-none">Thirtysixstudio</h1>
            </div>
            </div>
                {showCanvas && data[0].map((canvasdetails, index) => (
                    <Canvas key={index} details={canvasdetails} />
                ))}
        </div>
        <div className="w-full relative h-screen text-white mt-32">
        {showCanvas && data[1].map((canvasdetails, index) => (
                    <Canvas key={index} details={canvasdetails} />
                ))}
                <div className="w-full h-screen relative z-[1]">
                <h1 className="text-8xl tracking-tighter">about the brand</h1>
            <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light">
                We are team of designers, animators, and developers who are passionate about creating digital assets and immersive experiences for purposeful brands.
            </p>
                </div>

        </div>
        </>
        </div>
        </>
    );
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default App;