
## INFRUN_MEMBER TABLE : 기본 저장 테이블
CREATE TABLE INFRUN_MEMBER
(
	
	id BIGINT GENERATED BY DEFAULT AS IDENTITY,
	NAME VARCHAR(255),
	PRIMARY KEY (id)
	
)

## INSERT DEFAULT DATA
##INSERT INTO infrun_member( id , name ) VALUE( NULL , 'SPRING' )
##INSERT INTO infrun_member( id , name ) VALUE( NULL , 'SPRING2' )


##SELECT *
##FROM infrun_member
