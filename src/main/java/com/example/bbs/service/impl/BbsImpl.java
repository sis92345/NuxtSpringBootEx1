package com.example.bbs.service.impl;

import com.example.bbs.dao.BbsDAO;
import com.example.bbs.service.Bbs;
import com.example.bbs.vo.BbsInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class BbsImpl implements Bbs {

    @Autowired
    BbsDAO bbsDAO;
    @Override
    public List<BbsInfo> listAllBbs() {
        return bbsDAO.listAll();
    }

}
