package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.example.bbs.vo.BbsInfo;
import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

@SpringBootTest
@Slf4j
class HelloSpringApplicationTests {

	@Autowired
	private SqlSession sqlSession;
	private BbsInfo BbsInfo;


	@Test
	void sqlSessionTest() {
		assertNotNull(this.sqlSession);
	}
	
	@Test
	void testDate() {
		
		java.util.Date date = this.sqlSession.selectOne( "Bbs.currentDateMySql" );
		log.info( date.toString() );

	}

	@Test
	void listBbsAll(){

		List<BbsInfo> list = this.sqlSession.selectList( "Bbs.listAll" );

		list.forEach( info -> System.out.println( info.getIdx() ) );

	}

	@Test
	void MARIADB_연결테스트(){

	}

}
