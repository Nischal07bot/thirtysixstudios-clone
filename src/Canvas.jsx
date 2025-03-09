import {useEffect,useRef,useState} from "react"
import canvasImages from "./canvasImages"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
function Canvas({details}){
    const [index,setIndex]=useState({value:details.startIndex});
    const canvasRef = useRef(null);
    useGSAP(()=>{
        gsap.to(index,{
            value:details.startIndex+details.numImages-1,
            duration:details.duration,
            ease:"linear",
            onUpdate:()=>{
                setIndex({value:Math.round(index.value)});
            },
            repeat:-1,
            //yoyo:true
        })
    })
    useEffect(() => {
        // console.log(canvasImages);
        const scale=window.devicePixelRatio;
        const canvas=canvasRef.current;
        const ctx=canvas.getContext("2d");
        const img=new Image();
        img.src=canvasImages[index.value];
        img.onload=()=>{
            canvas.width=canvas.offsetWidth * scale;
            canvas.height=canvas.offsetHeight*scale;
            canvas.style.width=canvas.offsetWidth+"px";
            canvas.style.height=canvas.offsetHeight+"px";
            ctx.scale(scale,scale);
            ctx.drawImage(img,0,0,canvas.offsetWidth,canvas.offsetHeight);
        }
        },[index]);
    return <canvas ref={canvasRef} 
    className="absolute"
   style={{
    width: `${details.size*1.4}px`,
    height: `${details.size*1.4}px`,
    top: `${details.top}%`,
    left: `${details.left}%`,
    zIndex: `${details.zIndex}`,
   }}
    id="canvas"></canvas>
}
export default Canvas;
//canvas is a html element that is used to draw graphics on a web page
//ctx.drawImage(img,0,0); draws the image on the canvas
//ctx.drawImage(img,x,y); draws the image on the canvas at the specified coordinates
//ctx.drawImage(img,x,y,width,height); draws the image on the canvas at the specified coordinates with the specified width and height
//ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh); draws the image on the canvas at the specified coordinates with the specified width and height
/* canvas {
    width: 18rem;
    height: 18rem;
}==== to set the width and height of the canvas like this in tailwind css className="w-[18rem] h-[18rem]"id="canvas"*/


//offsetWidth/Height: The actual display size of the canvas
//clientWidth/Height: The size of the canvas including padding
//scrollWidth/Height: The size of the canvas including padding and scrollbar
//offsetLeft/Top: The distance of the canvas from the left/top of the page
//clientLeft/Top: The distance of the canvas from the left/top of the page including padding
//scrollLeft/Top: The distance of the canvas from the left/top of the page including padding and scrollbar
