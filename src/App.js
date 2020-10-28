// import logo from './logo.svg';
import React from 'react'
import WebcamCapture from './component/WebcamCapture/WebcamCapture'
import GyroscopeDetection from './component/GyroscopeDetection/GyroscopeDetection'
import './App.css';

function App() {
  return (
    <div className="App">
        <WebcamCapture/>
        {/* <GyroscopeDetection/> */}
    </div>
  );
}

export default App;
