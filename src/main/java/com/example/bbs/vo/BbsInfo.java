package com.example.bbs.vo;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class BbsInfo {

    //Member
    private int idx = 0 ;   // BBS SEQ
    private String writer;  // BBS 작성자
    private String title;   // BBS 제목
    private String contents; // BBS 제목

}
