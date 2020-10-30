import React,{useRef,useState,useCallback} from 'react'
import axios from 'axios'
import './WebcamCapture.css'
import Webcam from 'react-webcam'
import GyroscopeDetection from '../GyroscopeDetection/GyroscopeDetection'
function WebcamCapture() {

    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef, setImgSrc]);

    const handleRetake = useCallback((event)=>{
        event.persist()
        setImgSrc(null)
    })

    const handleSubmit = useCallback((event)=>{
        event.preventDefault()

        const requ = {
            image:imgSrc
        }

        const body = JSON.stringify(requ)

        console.log(body)

        const config = {
            headers:{
                "Content-Type" : "application/json"
            }
        }

        axios.post('http://localhost:5000',body,config)
            .then(res=>{
                console.log(res.data.message)
                setImgSrc(null)
            })
            .catch((err)=>{
                console.log(err.message)
            })
    })
    return (
        
        <>
            <div className='webcamContainer'>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture} className='captureBtn'></button>

            
            {imgSrc && (<img src={imgSrc}/>)}
            {imgSrc &&(<i onClick={handleRetake} className="fas fa-reply camera-icons retake"></i>)}
            {imgSrc &&(<i onClick={handleSubmit} className="fas fa-check camera-icons save"></i>)}
            
            
        </div>
        <GyroscopeDetection/>
        </>
    )
}

export default WebcamCapture
