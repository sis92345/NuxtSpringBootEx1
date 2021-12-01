package com.example.domain.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * SAP일때 스프링에서 해당 URL을 명시하면 에러오류가 나지 않아서
 * 필요한 URL을 선언해서 사용
 *
 * @author james
 *
 */
@Controller
public class MainController implements ErrorController {
		
		@RequestMapping( { "/gwChildren/**" } )
		public String entry() {
				
				return "forward:/index.html";
		}
		
		@RequestMapping( { "/error" } )
		public String entryError() {
				
				return "forward:/index.html";
		}
		
}
