import "./index.css";
import Canvas from './Canvas'; // Add this import
import data from "./infodata"
function App(){
    return (
        <>
        <div className="w-full relative min-h-screen">
           
            {data[0].map((canvasdetails,index)=>(
                        <Canvas details={canvasdetails}/>
                    ))}
        </div>
       
        </>
    );
}
export default App;