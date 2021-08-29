package com.example.domain.service;

import com.example.domain.Member;
import com.example.domain.repository.MemoryMemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

class MemberServiceTest {

    //MemberService memberService = new MemberService();
    MemberService memberService;
    MemoryMemberRepository memberRepository = new MemoryMemberRepository();

    @BeforeEach
    public void beforeEach(){
        memberRepository = new MemoryMemberRepository();        // MemoryMemberRepository를 생성
        memberService = new MemberService( memberRepository );  // MemberRepositoy를 생성한다.
     }
    @AfterEach
    public void afterEach(){
        memberRepository.clearStore();
    }
    @Test
    void 회원가입_테스트() {

        /** 테스트 기본 문법 : given when then */

        //given
        Member member = new Member();
        member.setName( "spring" );

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