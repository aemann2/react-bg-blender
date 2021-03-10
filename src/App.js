import './style/style.css';
import { useState } from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Photobtn from './components/Photobtn';

function App() {
  const [photo, setPhoto] = useState(null);

  const fetchPhoto = () => {
    const url = 'https://picsum.photos/800?grayscale';

    fetch(url)
      .then((response) => response.blob())
      .then((data) => {
        const imgURL = URL.createObjectURL(data);
        setPhoto(imgURL);
      });
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Photo fetchPhoto={fetchPhoto} photo={photo} />
      </main>
      <div className='selectors__blend-mode'>
        <Photobtn fetchPhoto={fetchPhoto} photo={photo} />
      </div>
    </div>
  );
}

export default App;
