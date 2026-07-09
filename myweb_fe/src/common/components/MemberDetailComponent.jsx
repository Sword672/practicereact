import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Navigate } from "react-router-dom";

function MemberDetailComponent() {

    const navigate = useNavigate();
    const {userId} = useParams();

    const [member, setMember] = useState({
        userId: "",
        userName: "",
        email: "",
        gender: "",
        phone: "",
        address: "",
        status: "",
    });

    useEffect(() => {

        const selectMember = async () => {
            try {

                const response = await axios({
                    url: `http://localhost:8006/myweb/members/${userId}`,
                    method: "get"
                });

                setMember(response.data);

                
            } catch(error) {
                console.log("통신 실패");
            }
        }
        
        selectMember();
        
    }, []);
    
    const updateMember = async e => {
        
        e.preventDefault();
        
        try {
            
            const response = await axios({
                url: `http://localhost:8006/myweb/members/${userId}`,
                method: "put",
                data: member
            })
            
            console.log(response.data);

            toast.success("수정 성공");
            navigate("/member/list")

        } catch(error) {
            console.log("수정 통신 실패");
        }


    }






    return (
        <div>

            <h2 align="center">회원 상세 조회</h2>

            <br/>

            <form id="update-form">
                <table>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name="userId" value={member.userId} readOnly onChange={() => {}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" name="userName" value={member.userName} onChange={e => {setMember({...member, userName: e.target.value})}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input type="email" name="email" value={member.email} onChange={e => {setMember({...member, email: e.target.value})}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <label><input type="radio" name="gender" value="M" checked={member.gender === "M" } onChange={e => {setMember({...member, gender: e.target.value})}}/>남자</label>
                                <label><input type="radio" name="gender" value="F" checked={member.gender === "F"} onChange={e => {setMember({...member, gender: e.target.value})}}/>여자</label>
                                <label><input type="radio" name="gender" value="" checked={member.gender === ""} onChange={e => {setMember({...member, gender: e.target.value})}}/>선택안함</label>
                            </td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>
                                <input type="text" name="phone" value={member.phone} onChange={e => {setMember({...member, phone: e.target.value})}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input type="text" name="address" value={member.address} onChange={e => {setMember({...member, address: e.target.value})}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>탈퇴여부</th>
                            <td>
                                <input type="text" name="status" value={member.status} onChange={e => {setMember({...member, status: e.target.value})}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br/>

                <div align="center">
                    <button type="submit" onClick={updateMember}>수정하기</button>
                    <button type="button">탈퇴하기</button>
                </div>

            </form>

        </div>
    )
}

export default MemberDetailComponent