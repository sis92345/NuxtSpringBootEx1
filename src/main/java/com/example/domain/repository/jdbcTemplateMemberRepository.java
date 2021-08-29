package com.example.domain.repository;

import com.example.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class jdbcTemplateMemberRepository implements MemberRepository{

    private final JdbcTemplate jdbcTemplate;
    
    @Autowired  // 생성자가 하나일 경우 자동으로 AUTOWIRED되므로 따로 안써도 됨
    public jdbcTemplateMemberRepository( DataSource dataSource ){
        jdbcTemplate = new JdbcTemplate( dataSource );
    }

    @Override
    public Member save(Member member) {
        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert( jdbcTemplate );
        jdbcInsert.withTableName( "infrun_member" ).usingGeneratedKeyColumns( "id" );

        Map<String,Object> parameters = new HashMap<>();
        parameters.put( "name" , member.getName() );

        Number key = jdbcInsert.executeAndReturnKey( new MapSqlParameterSource( parameters ) );
        member.setId( key.longValue() );
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        List<Member> result =  jdbcTemplate.query( "SELECT * FROM INFRUN_MEMBER WHERE ID = ? " , memberRowMapper() , id );
        return result.stream().findAny();
    }

    @Override
    public Optional<Member> findByName(String id) {
        List<Member> result =  jdbcTemplate.query( "SELECT * FROM INFRUN_MEMBER WHERE NAME = ? " , memberRowMapper() , id );
        return result.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        List<Member> result = jdbcTemplate.query( "SELECT * FROM INFRUN_MEMBER" , memberRowMapper() );
        return result;
    }

    private RowMapper<Member> memberRowMapper(){
        return (rs, rowNum) -> {

            Member member =  new Member();
            member.setId( rs.getLong( "id" ) );
            member.setName( rs.getString( "name" ));
            return member;

        };
    }
}
