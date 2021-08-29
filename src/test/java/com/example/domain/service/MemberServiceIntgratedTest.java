package com.example.domain.service;

import com.example.config.SpringConfig;
import com.example.demo.HelloSpringApplication;
import com.example.domain.Member;
import com.example.domain.repository.JdbcMemberRepository;
import com.example.domain.repository.MemberRepository;
import com.example.domain.repository.MemoryMemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertThrows;


@SpringBootTest( classes = HelloSpringApplication.class )
//@Transactional  //@Transactional를 TEST에 붙이면 @Transactional를 실행하고 TEST -> DB 롤백
class MemberServiceIntgratedTest {

    //MemberService memberService = new MemberService();
    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository MemberRepository;

    @Test
    void 회원가입_테스트() {

        /** 테스트 기본 문법 : given when then */

        //given
        Member member = new Member();
        member.setName( "spring5" );

        //when
        Long saveId = memberService.join( member );

        //then
        Member findMember =  memberService.findOne( saveId ).get();
        Assertions.assertThat( member.getName()).isEqualTo( findMember.getName());

    }

    @Test
    public void 중복_회원_예외(){

        //given

        Member firstMember = new Member();
        firstMember.setName( "spring" );

        Member duplicatedMember = new Member();
        duplicatedMember.setName( "spring" );

        //when
        memberService.join( firstMember );
        IllegalStateException e = assertThrows( IllegalStateException.class, () -> memberService.join( duplicatedMember ) );
        Assertions.assertThat( e.getMessage() ).isEqualTo( "이미 존재하는 회원입니다." );
        /**
         * 기존 문법
         * memberService.join( firstMember );
         * try{
         *     memberService.join( duplicatedMember);
         *     fail();
         * }
         * catch( IlligealStateException e ){ Assertions.assertThat( e,getMessage() ).isEqualTo( "이미 존재하는 회원입니다."); }
         * */
        //then
    }

    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}