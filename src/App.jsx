import "./index.css";
import Canvas from './Canvas'; // Add this import
import data from "./infodata"
import {useEffect} from "react"
import LocomotiveScroll from 'locomotive-scroll';

function App(){
    useEffect(()=>{
        const locomotiveScroll = new LocomotiveScroll();
    },[]);
    return (
        <>
        <div className="w-full relative min-h-screen">
           
            {data[0].map((canvasdetails,index)=>(
                        <Canvas details={canvasdetails}/>
                    ))}
        </div>
        <div className="w-full relative min-h-screen">
           
            {data[1].map((canvasdetails,index)=>(
                        <Canvas details={canvasdetails}/>
                    ))}
        </div>
        <div className="w-full relative min-h-screen">
           
            {data[2].map((canvasdetails,index)=>(
                        <Canvas details={canvasdetails}/>
                    ))}
        </div>
       
        </>
    );
}
export default App;