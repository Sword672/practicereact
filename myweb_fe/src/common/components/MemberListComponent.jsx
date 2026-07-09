import {useEffect, useState} from "react";
import axios from 'axios';
import MemberItemComponent from './MemberItemComponent';


//회원 목록 조회 화면을 나타내는 컴포넌트: 
function MemberListComponent() {
    
    //실행할 구문



    const [ dataList, setDataList] = useState([]);

    useEffect(() => {

        const selectMemberList = async () => {

            try {

                const response = await axios({
                    url: "http://localhost:8006/myweb/members",
                    method: "get"
                });

                const items = response.data;

                const trArr = items.map((item) => {
                    return (<MemberItemComponent key={item.userId} item={item}/>)
                })

                setDataList(trArr);


            } catch(error) {

                console.log("회원 목록 조회용 ajax 통신 실패");
            }

        }

        selectMemberList();

    }, [])

    //return 구문
    return (
        <div>
            <h2 align="center">회원 목록 조회</h2>

            <br/>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>회원명</th>
                        <th>이메일</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>회원가입일</th>
                        <th>탈퇴여부</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList}
                </tbody>
            </table>
        </div>
    )
}

//내보내기
export default MemberListComponent