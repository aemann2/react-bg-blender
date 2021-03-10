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
    </div>
  );
}

export default App;
