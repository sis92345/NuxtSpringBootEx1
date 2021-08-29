package com.example.domain.repository;

import com.example.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;


public class MemoryMemberRepository implements MemberRepository {

    private static Map< Long , Member > store = new HashMap<>();
    private static long sequuence = 0L;
    @Override
    public Member save(Member member) {
        member.setId( ++sequuence );
        store.put( member.getId() , member );
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return  Optional.ofNullable( store.get( id ) );
    }

    @Override
    public Optional<Member> findByName( String name ) {

        return store.values().stream()
                .filter( item -> item.getName().equals( name ) )
                .findAny();
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>( store.values() );
    }

    public void clearStore(){
        store.clear();
    }
}
