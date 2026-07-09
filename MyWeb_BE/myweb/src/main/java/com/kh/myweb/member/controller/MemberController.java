package com.kh.myweb.member.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.myweb.member.model.service.MemberService;
import com.kh.myweb.member.model.vo.Member;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin
@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/members")
    public ResponseEntity<ArrayList<Member>> selectMemberList() {


        ArrayList<Member> list = memberService.selectMemberList();

        for (Member m : list) {
            System.out.println(m);
        }

        return ResponseEntity.status(HttpStatus.OK).body(list);
        
    }

    @GetMapping("/members/{userId}")
    public ResponseEntity<Member> selectMember(@PathVariable String userId) {

        Member m = memberService.selectMember(userId);

        return ResponseEntity.status(HttpStatus.OK).body(m);
    }

    @PutMapping("/members/{userId}")
    public int updateMember(@PathVariable String userId, @RequestBody Member member) {
        
        int result = memberService.updateMember(member);

        return result;
    }

}
