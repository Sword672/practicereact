import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


/**
 * ERP 만들기
 * 1. 회원 관리 기능
 * 2. 공지사항 관리기능
 * 3. 일반 게시판 관리 기능
 */