import { useState } from 'react'
import 'aframe';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{textAlign:'center', margin:'2rem 0', fontWeight:'bold'}}>منصة عقارات عالمية بتقنية VR وIPFS</h1>
      <div style={{display:'flex', justifyContent:'center'}}>
        <a-scene embedded style={{width:'800px', height:'400px', borderRadius:'16px', overflow:'hidden'}}>
          <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" rotation="0 -130 0"></a-sky>
        </a-scene>
      </div>
      <div style={{textAlign:'center', marginTop:'2rem'}}>
        <p>تجربة مشاهدة العقار بزاوية 360° وواقع افتراضي. سيتم إضافة ميزات التغيير والتفاعل قريبًا.</p>
      </div>
    </>
  )
}

export default App
