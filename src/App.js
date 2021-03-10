import './style/style.css';
import { useState } from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Photobtn from './components/Photobtn';

function App() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPhoto = () => {
    const url = 'https://picsum.photos/800?grayscale';
    setLoading(true);
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
      <main>
        <Photo fetchPhoto={fetchPhoto} photo={photo} loading={loading} />
      </main>
      <div className='selectors__blend-mode'>
        <Photobtn fetchPhoto={fetchPhoto} />
      </div>
    </div>
  );
}

export default App;
