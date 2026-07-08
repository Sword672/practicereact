import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './common/components/Header'
import Footer from './common/components/Footer'
import { Routes, Route } from 'react-router-dom'
import Index from './Index'
import MemberListComponent from './common/components/MemberListComponent'
import MemberDetailComponent from './common/components/MemberDetailComponent'

function App() {

  return (
    <div>
      <Header/>

      <div className="content" style={{height: "600px"}}>

        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/member/list" element={<MemberListComponent/>} />
          <Route path="/member/detail/:userId" element={<MemberDetailComponent/>} />
        </Routes>

      </div>

      <Footer/>
    </div>
  )
}

export default App
