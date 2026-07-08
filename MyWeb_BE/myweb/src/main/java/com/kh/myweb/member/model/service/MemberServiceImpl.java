package com.kh.myweb.member.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.myweb.member.model.dao.MemberDao;
import com.kh.myweb.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberDao memberDao;

    @Override
    public int deleteMember(Member m) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public Member selectMember(String userId) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ArrayList<Member> selectMemberList() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int updateMember(Member m) {
        // TODO Auto-generated method stub
        return 0;
    }

}
