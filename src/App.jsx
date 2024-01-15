import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Landing from './Landing';
import PrivacyPolicy from './PrivacyPolicy';

function App() {

  return (
    <>
     <BrowserRouter>
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route path='/privacypolicy' element={<PrivacyPolicy />} />
					</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
