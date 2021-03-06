import React,{useEffect,useState} from 'react'

function GyroscopeDetection() {
    
    // let [alpha,setAlpha] = useState(0);
    // let [beta,setBeta] = useState(0);
    // let [gamma,setGamma] = useState(0);

    const [{ xAcceleration, yAcceleration,zAcceleration }, setMotion] = useState({ x: 0, y: 0 ,z:0})

    // const deviceOrientationHandler = (event)=>{
    //     setAlpha(event.alpha)
    //     setBeta(event.beta)
    //     setGamma(event.gamma)
    //     console.log(event)
    // }

    const deviceMotionEventHandler = (event)=>{
             requestAnimationFrame(() =>
            setMotion({
            xAcceleration: event.acceleration.x,
            yAcceleration: event.acceleration.y,
            zAcceleration: event.acceleration.z,
        }),
       );
    }

    useEffect(()=>{
        if (window.DeviceOrientationEvent) {
            // window.addEventListener('deviceorientation', (event) => deviceOrientationHandler(event), true);
            window.addEventListener('devicemotion',(event)=> deviceMotionEventHandler(event),true);
            document.getElementById("doeSupported").innerText = "Supported!";
          }
        return () => {
            window.removeEventListener('devicemotion', deviceMotionEventHandler)
            // window.removeEventListener('deviceorientation',deviceOrientationHandler)
        }
    },[])



    return (
        <div>
            <h1 id='doeSupported'></h1>
            {/* <h1>{`alpha :  ${alpha}`}</h1>
            <h1>{`beta :  ${beta}`}</h1>
            <h1>{`gamma :  ${gamma}`}</h1> */}
            <h1>{`acceleration in x :  ${xAcceleration}`}</h1>
            <h1>{`acceleration in y:  ${yAcceleration}`}</h1>
            <h1>{`acceleration in z:  ${zAcceleration}`}</h1>
        </div>
    )
}





export default GyroscopeDetection
