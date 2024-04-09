
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from './common/components/RequireAuth';
import { Login, Register } from './pages';

function App() {

  return (
    <div className='App h-screen w-screen'>
      <Router>
        <Routes>

          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          
          <Route element={<RequireAuth />}>
            <Route path='home/*' element={<div />} />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
