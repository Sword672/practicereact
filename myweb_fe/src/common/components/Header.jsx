import { Link } from "react-router-dom"
import '../styles/Header.css'


function Header() {

    return (
        <div>
            <h1 align="center">Welcome to React Manager</h1>

            <br></br>

            <div className="navi">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/member/list">회원관리</Link>
                </div>
                <div>
                    <Link to="/notices">공지사항관리</Link>
                </div>
                <div>
                    <Link to="/boards">일반게시판관리</Link>
                </div>
            </div>
        </div>
    )
}

export default Header

/**
 * 브라우저 창에 보이는 url 주소 vs 백엔드와 통신할 때 쓰이는 url 주소
 * 브라우저 창에 보이는 url 주소: 예전처럼 도메인/ 기능
 * 
 * 
 */