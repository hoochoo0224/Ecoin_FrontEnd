import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from 'src/pages/index/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
