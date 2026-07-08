package com.kh.myweb.member.model.service;

import java.util.ArrayList;

import com.kh.myweb.member.model.vo.Member;

/*
    인터페이스(interface)
    모든 필드가 상수필드이고, 모든 메소드가 추상메소드인 일종의 추상클래스

    추상 클래스(abstract class)
    abstract 키워드를 그냥 붙이거나, 해당 클래스 내에 추상메소드가 하나라도 포함되면 추상클래스가 됨

    추상메소드
    메소드 코드가 담겨있는 몸통부가 없는 메소드
    즉, 머리부만 있는 메소드
    이 추상메소드를 완성시키려면 상속 받은 뒤 오버라이딩을 통해 내용을 채워넣어야 한다.

    인터페이스가 일반적인 추상클래스보다 구현의 강제성이 더 세다. (무조건 오버라이딩 할 수 밖에 없다.)
    실무에서는 오히려 이 점을 이용해서 협업 시 인터페이스를 많이들 쓴다.
    팀의 리더가 인터페이스에 추상메소드를 미리 다 정의해서 그 인터페이스를 팀원들에게 배포
    팀원들은 그 전달받은 인터페이스를 상속받아서 구현

    인터페이스 또는 추상클래스는 미완성된 상태이기 때문에 객체 생성이 불가하고,
    실제 구현체 클래스가 완성본이므로, 실제 객체 생성은 구현체 클래스로 한다.
    그래서 스프링에서 객체를 생성하기 위해 Bean으로 등록
*/
public interface MemberService {

    //회원 목록 조회용 서비스
    ArrayList<Member> selectMemberList();

    //회원 상세 조회용 서비스
    Member selectMember(String userId);

    //회원 정보 수정용 서비스
    int updateMember(Member m);

    //회원 탈퇴용 서비스
    int deleteMember(Member m);
}
