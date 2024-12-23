import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from './pages/index/index'
import Minter from './pages/minter/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<MainPage />}></Route>
        <Route path='/minter' element={<Minter/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
