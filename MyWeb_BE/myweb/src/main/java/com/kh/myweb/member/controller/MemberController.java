package com.kh.myweb.member.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.myweb.member.model.service.MemberService;
import com.kh.myweb.member.model.vo.Member;

@CrossOrigin
@RestController
@RequestMapping("/myweb")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/members")
    public ResponseEntity<ArrayList<Member>> selectMemberList() {

        System.out.println("들어왔음.");


        ArrayList<Member> list = memberService.selectMemberList();

        for (Member m : list) {
            System.out.println(m);
        }

        return ResponseEntity.status(HttpStatus.OK).body(list);
        
    }

}
