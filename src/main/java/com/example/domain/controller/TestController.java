package com.example.domain.controller;

import com.example.domain.vo.MemberForm;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
		
		@RequestMapping( "/test" )
		public void test(  @RequestBody MemberForm memberForm ) {
		
				System.out.println( memberForm.getDate() );
		}
}
