package com.example.domain.repository;


import com.example.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member );
    Optional<Member> findById(Long id );
    Optional<Member> findByName( String id );
    List<Member> findAll();
}
