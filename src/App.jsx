
import Home from './views/Home'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Secciones from './views/Sections'


function App() {
  return (
    <>
      <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1 mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secciones" element={<Secciones/>} />
        </Routes>
        </div>
      </div>
      <Footer />
      </Router>
    </>
  )
  /*const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
