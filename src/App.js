import './style/style.css';
import Header from './components/Header';
import Photo from './components/Photo';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Photo />
      </main>
      <div className='selectors__blend-mode'>
        <button className='selectors__new-pic' id='new-pic'>
          New Photo
        </button>
      </div>
    </div>
  );
}

export default App;
