import { Navigate, useNavigate } from "react-router-dom"


function MemberItemComponent({item}) {
    const navigate = useNavigate();
    return (
            <tr onClick={() => {navigate(`/member/detail/${item.userId}`)}}
                style={{cursor: 'pointer'}}
                >
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.enrollDate}</td>
                <td>{item.status}</td>
            </tr>
    )
}

export default MemberItemComponent