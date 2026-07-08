package com.kh.myweb.member.model.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.myweb.member.model.dao.MemberDao;
import com.kh.myweb.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberDao memberDao;

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public int deleteMember(Member m) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public Member selectMember(String userId) {
        return memberDao.selectMember(sqlSession, userId);
    }

    @Override
    public ArrayList<Member> selectMemberList() {
        return memberDao.selectMemberList(sqlSession);
    }

    @Override
    public int updateMember(Member m) {
        // TODO Auto-generated method stub
        return 0;
    }

}
