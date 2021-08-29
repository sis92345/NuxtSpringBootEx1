package com.example.bbs.controller;

import com.example.bbs.service.Bbs;
import com.example.bbs.vo.BbsInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@Slf4j

public class BbsController {

    @Autowired
    private Bbs bbs;

    @RequestMapping( method = RequestMethod.GET , value = "/bbs/listAll")
    @CrossOrigin( origins = "http://localhost:3000" )
    public List<BbsInfo> listAll(){

        List<BbsInfo> info = bbs.listAllBbs();
        System.out.println( info );
        return info;

    }

    @RequestMapping( method = RequestMethod.GET , value = "/bbs/test")
    @CrossOrigin( origins = "http://localhost:3000" )
    public String test(){
        return "test";

    }
}
