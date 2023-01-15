import paginationView from "../components/core/view/pagination/paginationView.vue"
import {mount} from "@vue/test-utils";
describe( "Jest 테스트가 정상적으로 작동하는지 검증한다." , ()=>{

    it( "일반 테스트 : Vue를 사용하지 않는 일반 테스트" , ()=>{

        expect( true ).toBeTruthy();
    });

    // 참고로 ref가 #import로 들어갈 경우 테스트 안됨, 이거 테스트 더블 만들어야 하는데에에에...
    it( "Vue instance 테스트는 vue/test-utils를 사용해서 로드할 수 있다.", () => {

        const $page = mount( paginationView );

        expect( $page ).toBeTruthy();

        // $page.vm.currentPage
    });

    it( "마운트한 인스턴스는 vm으로 접근할 수 있다." , () => {

        const $page = mount( paginationView );

        expect( $page.vm.currentPage ).toBe( 1 );
    });
})