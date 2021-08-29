package domain;

import com.example.domain.Member;
import com.example.domain.repository.MemoryMemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@Slf4j
class MemberRepositoryTest {

   MemoryMemberRepository repository = new MemoryMemberRepository();

   @AfterEach
   void afterEach(){

       repository.clearStore();

   }

   @Test
   public void 멤버_저장_테스트(){

       Member member = new Member( );
       member.setName( "Spring" );
       repository.save( member );

       Member result = repository.findByName( member.getName() ).get();



       log.info( "result = " + ( result == member ) );

       //Assertions.assertEquals( member , null );
       //static import
       assertThat( member ).isEqualTo( result );

   }

   @Test
   public void 이름으로_찾기_테스트(){

        Member member = new Member( );
        member.setName( "Spring" );
        repository.save( member );


        Member member2 = new Member( );
        member2.setName( "Spring2" );
        repository.save( member2 );

        Member result = repository.findByName( "Spring2" ).get();

        assertThat( result ).isEqualTo( member2 );


   }

   @Test
   public void 모두_찾기_테스트(){

       Member member = new Member( );
       member.setName( "Spring" );
       repository.save( member );

       Member member2 = new Member( );
       member2.setName( "Spring2" );
       repository.save( member2 );

       Member member3 = new Member( );
       member.setName( "Spring" );
       repository.save( member3 );

       List<Member> list = new ArrayList<>();
       list.add( member );
       list.add( member2 );
       list.add( member3 );

       List<Member> result = repository.findAll();
       assertThat( result.size() ).isEqualTo( list.size() );

   }


}
