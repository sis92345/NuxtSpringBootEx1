package com.example.domain.controller;

import com.example.domain.Member;
import com.example.domain.service.MemberService;
import com.example.domain.vo.MemberForm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@Slf4j
public class MemberController {

    private MemberService memberService;

    // 생성자 방식 DI
    @Autowired
    public MemberController( MemberService memberService ){
        this.memberService = memberService;
    }

    /**
     * @apiNote : home에 필요한 정보를 return viewResolver가 아닌 data 반환
     * */
    @RequestMapping( value = "/member/home" , method = RequestMethod.GET )
    @ResponseBody
    @CrossOrigin( origins = "http://localhost:3000" )
    public String home(){
        return "members/createMemberForm";
    }

    /**
     * @apiNote 회원을 등록합니다.
     * @desceiption 전통적인 방식의 controller : 컨트롤러에서 리턴한 문자열로 viewName을 매핑 -> resource:templates/+ {ViewName} + .html
     * */
    @RequestMapping( value = "/members/join" , method = RequestMethod.GET )
    public String goToMemberForm (){
        return "members/createMemberForm";
    }

    @GetMapping( "/members" )
    public String list( Model model ){

        List<Member> members = memberService.findMembers();
        model.addAttribute( "members" , members );

        return "members/memberList";
    }

    /**
     * @apiNote 회원 등록 API
     * */
    @RequestMapping( value = "members/join" , method = RequestMethod.POST)
    public String joinMember( MemberForm memberForm  ){

        Member member = new Member();

        member.setName( memberForm.getName() );

        System.out.println( "member" + member.getName() );
        memberService.join( member );
        return "hello";
    }

    @RequestMapping( value = "/" , method = RequestMethod.GET )
    public String index(){
        return "hello";
    }

    /**
     * @apiNote mvc + 탬플릿
     * */
    @GetMapping( "hello" )
    public String hello( Model model ){
        model.addAttribute( "data" , "Hello Spring Boot World" );
        return "hello";
    }
}
