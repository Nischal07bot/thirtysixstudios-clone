import "./index.css";
import Canvas from './Canvas';
import data from "./infodata";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';
import { useEffect,useState ,useRef} from 'react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
function Home() {
    const [count, setCount] = useState(0);
    const [showCanvas, setShowCanvas] = useState(false);
    const growingspan=useRef(null);
    const headingref = useRef(null);
    useEffect(()=>{
        const scroll = new LocomotiveScroll();
        return ()=>{
            scroll.destroy();
        }
    },[])
    useGSAP(() => {
        headingref.current.addEventListener("click", (e) => {
            setCount(prev => prev + 1);
            if (showCanvas) {
                setShowCanvas(false);
            } else {
                setShowCanvas(true);
            }
            if (count === 0) {
                gsap.set(growingspan.current, {
                    top: e.clientY,
                    left: e.clientX,
                });
                gsap.to(growingspan.current, {
                    scale: 1000,
                    duration: 1,
                    ease: "power2.inOut",
                });
            }
        });
    }, [showCanvas, count]);
    return (
        <>
        <span ref={growingspan} className="growing rounded-full fixed top-0 left-0 w-5 h-5" ></span>
        <div 
            className="w-full relative min-h-screen text-white cursor-pointer"
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
                <h1 ref={headingref}className="text-white text-[17rem] font-normal tracking-light leading-none">Thirtysixstudio</h1>
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