package com.example.domain.service;

import com.example.domain.Member;
import com.example.domain.repository.MemberRepository;
import com.example.domain.repository.MemoryMemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Slf4j
public class MemberService {

    /** 이렇게 new 하면 다른곳에서 import하면 그럴때 마다 다른 repository를 생성*/

    /** 생성자에 @Autowired -> 생성자에 필요한 Dependency injection( 여기서는 MemoryMemberRepository )*/

    /** DI : 생성자 주입 */
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    private final MemberRepository memberRepository;

    /**
     * 회원 가입
     * */
    public Long join( Member member ){

        // 같은 이름이 있은 중복 회원X
        /** Optional으로 바로 받는것은 비추천한다. 아래는 비추천 코드 */
        //Optional<Member> result = memberRepository.findByName(member.getName());
        //result.ifPresent( m -> {
        //    throw new IllegalStateException( "이미 존재하는 회원입니다." );
        //});


        duplicateMemberName(member);

        memberRepository.save(member);
        return member.getId();

    }

    /**
     * 전체 회원 조회
     * */
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    /**
     * 회원 ID 조회
     * */
    public Optional<Member> findOne( Long memberId ){
       return memberRepository.findById( memberId );
    }

    private void duplicateMemberName(Member member) {
        memberRepository.findByName( member.getName() ).ifPresent(item ->{
            throw new IllegalStateException( "이미 존재하는 회원입니다." );
        });
    }

}
