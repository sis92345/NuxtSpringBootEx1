package com.example.config;

import com.example.aop.TimeTraceAop;
import com.example.domain.repository.JdbcMemberRepository;
import com.example.domain.repository.MemberRepository;
import com.example.domain.repository.MemoryMemberRepository;
import com.example.domain.repository.jdbcTemplateMemberRepository;
import com.example.domain.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import javax.swing.*;

@Configuration
public class SpringConfig {

    private DataSource dataSource;

    @Autowired
    public SpringConfig( DataSource dataSource ){
        this.dataSource = dataSource;
    }

    /**
     * Spring Bean 등록
     * */

    /**
     * MemberService Bean
     * */
    @Bean
    public MemberService memberService(){
        return new MemberService( memberRepository() );
    }

    /**
     * memberRepository Bean : interface가 구현되어 있기 때문에 구현체만 바로 돌리면 문제 없음
     * */
    @Bean
    public MemberRepository memberRepository(){
        return new jdbcTemplateMemberRepository( dataSource );
    }

    /**
     * TimeTraceAop Bean : 메소드 실행 시간 측정 AOP
     * */
    //@Bean
    //public TimeTraceAop timeTraceAop(){ return new TimeTraceAop(); }
}
