package com.kh.myweb.member.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.myweb.member.model.vo.Member;

@Repository
public class MemberDao {

    public ArrayList<Member> selectMemberList(SqlSessionTemplate sqlSession) {
        return (ArrayList)sqlSession.selectList("memberMapper.selectMemberList");
    }

}
