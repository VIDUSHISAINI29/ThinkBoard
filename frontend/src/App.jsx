import { React } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'

const App = () => {
  return (
    <div data-theme="forest">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
      
    </div>
  )
}

export default App
