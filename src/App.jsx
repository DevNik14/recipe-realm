import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main" role="main">
        <Intro />
      </main>
    </>
  )
}

export default App
