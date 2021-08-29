package com.example.bbs.dao;

import com.example.bbs.vo.BbsInfo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BbsDAO {

    @Autowired
    private SqlSession sqlSession;

    public List<BbsInfo> listAll(){

        return sqlSession.selectList( "Bbs.listAll" );

    }
}
