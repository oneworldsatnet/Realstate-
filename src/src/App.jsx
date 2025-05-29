import { useState } from 'react'
import 'aframe';
import { create } from 'ipfs-http-client';
import './App.css'

const ipfs = create({ url: 'https://ipfs.io' });

function App() {
  const [imageUrl, setImageUrl] = useState('https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  // رفع صورة إلى IPFS
  const handleImageUpload = async (e) => {
    setError('');
    setUploading(true);
    try {
      const file = e.target.files[0];
      if (!file) return;
      const added = await ipfs.add(file);
      setImageUrl(`https://ipfs.io/ipfs/${added.path}`);
    } catch (err) {
      setError('حدث خطأ أثناء رفع الصورة.');
    }
    setUploading(false);
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="main-title">منصة عقارات عالمية بتقنية VR وIPFS</h1>
        <nav className="main-nav">
          <button className="nav-btn">الرئيسية</button>
          <button className="nav-btn">جولة افتراضية</button>
          <button className="nav-btn">رفع صورة</button>
          <button className="nav-btn">الأقسام</button>
        </nav>
      </header>
      <div className="sections">
        <section className="section">
          <h2>جولة افتراضية 360°</h2>
          <div style={{display:'flex', justifyContent:'center'}}>
            <a-scene embedded style={{width:'100%', maxWidth:'800px', height:'400px', borderRadius:'16px', overflow:'hidden'}}>
              <a-sky src={imageUrl} rotation="0 -130 0"></a-sky>
            </a-scene>
          </div>
          <p style={{textAlign:'center', marginTop:'1rem'}}>شاهد العقار بزاوية 360° على أي جهاز، مع أو بدون نظارة VR.</p>
        </section>
        <section className="section">
          <h2>رفع صورة عقار إلى IPFS</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
          {uploading && <p>جاري الرفع...</p>}
          {error && <p style={{color:'red'}}>{error}</p>}
          <p style={{fontSize:'0.9rem', color:'#666'}}>اختر صورة بانورامية 360° أو صورة عادية لتجربتها في الواقع الافتراضي.</p>
        </section>
        <section className="section">
          <h2>أقسام المنصة</h2>
          <ul className="sections-list">
            <li>عقارات سكنية</li>
            <li>عقارات تجارية</li>
            <li>فلل وقصور</li>
            <li>أراضي</li>
            <li>مشاريع جديدة</li>
            <li>تجربة الواقع الافتراضي بدون نظارة</li>
            <li>تواصل مع الجيران (قريبًا)</li>
            <li>تغيير الديكور والفصول (قريبًا)</li>
          </ul>
        </section>
        <section className="section">
          <h2>تجربة صورة تجريبية</h2>
          <button className="demo-btn" onClick={() => setImageUrl('https://cdn.aframe.io/360-image-gallery-boilerplate/img/chesapeake.jpg')}>عرض صورة بانورامية تجريبية</button>
          <button className="demo-btn" onClick={() => setImageUrl('https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg')}>إعادة الصورة الافتراضية</button>
        </section>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} منصة عقارات عالمية | تصميم وابتكار الذكاء الاصطناعي</p>
      </footer>
    </div>
  )
}

export default App
