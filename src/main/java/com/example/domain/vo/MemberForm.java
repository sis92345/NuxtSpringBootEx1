package com.example.domain.vo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Getter
@Setter
public class MemberForm {

    private String name;
    private LocalDateTime date;

}
