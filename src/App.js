import './style/style.css';
import { useState } from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import ColorPicker from './components/ColorPicker';
import Photobtn from './components/Photobtn';

function App() {
  // state lifted up from Photo and Photobtn components
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPhoto = () => {
    const url = 'https://picsum.photos/800?grayscale';
    setLoading(true);
    document.documentElement.style.setProperty('--color', 'transparent');

    fetch(url)
      .then((response) => response.blob())
      .then((data) => {
        const imgURL = URL.createObjectURL(data);
        setPhoto(imgURL);
        setLoading(false);
      });
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='main'>
        <Photo fetchPhoto={fetchPhoto} photo={photo} loading={loading} />
        <div className='selectors'>
          <ColorPicker />
          <Photobtn fetchPhoto={fetchPhoto} />
        </div>
      </main>
    </div>
  );
}

export default App;
