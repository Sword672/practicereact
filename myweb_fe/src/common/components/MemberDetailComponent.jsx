

function MemberDetailComponent() {
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
                                <input type="text" name="userId" value="조회해온 아이디" readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" name="userName" value="조회해온 이름"/>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input type="email" name="email" value="조회해온 이름"/>
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <label><input type="radio" name="gender" value="M" />남자</label>
                                <label><input type="radio" name="gender" value="F" />여자</label>
                                <label><input type="radio" name="gender" value="" />선택안함</label>
                            </td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>
                                <input type="text" name="phone" value="조회해온 이름"/>
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input type="text" name="address" value="조회해온 이름"/>
                            </td>
                        </tr>
                        <tr>
                            <th>탈퇴여부</th>
                            <td>
                                <input type="text" name="status" value="조회해온 이름"/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br/>

                <div align="center">
                    <button type="submit">수정하기</button>
                    <button type="button">탈퇴하기</button>
                </div>

            </form>

        </div>
    )
}

export default MemberDetailComponent