package com.example.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@PropertySource("classpath:application.properties")
public class DataBaseConfig {
	
	@Autowired
	ApplicationContext applicationContext;
	
	@Bean
	@ConfigurationProperties(prefix = "spring.datasource.hikari")
	public HikariConfig hikariConfig() {
		return new HikariConfig();
	}

	@Bean
	public DataSource dataSource() throws Exception {
		DataSource dataSource = new HikariDataSource(hikariConfig());
		log.info("datasource : {}", dataSource);
		return dataSource;
	}

	@Bean
	public SqlSessionFactory sqlSessionFactory() throws Exception{
		SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
		sqlSessionFactory.setDataSource(this.dataSource());
		sqlSessionFactory.setConfigLocation(new ClassPathResource("mybatis-config.xml"));
		//MapperLocation 설정 1 : new ClassPathResource( String path )를 이용한다. path는 절대경로이므로 1개만 지정 가능
		//sqlSessionFactory.setMapperLocations(new ClassPathResource("/Mapper/testS.xml"));	
		
		//MapperLocation 설정 2 : ApplicationContext객체의 getResources( String locationPattern )를 이용한다. locationPattern으로 필요한 Resource Object의 위치를 얻으므로 폴더에 있는 모든 sql 지정 가능
		sqlSessionFactory.setMapperLocations( applicationContext.getResources( "classpath:/Mapper/*.xml" ) );
		return sqlSessionFactory.getObject();
	}
	
	@Bean
	public SqlSessionTemplate sqlSession() throws Exception{
		SqlSessionTemplate sqlSession = new SqlSessionTemplate(this.sqlSessionFactory());
		return sqlSession;
	}
}
