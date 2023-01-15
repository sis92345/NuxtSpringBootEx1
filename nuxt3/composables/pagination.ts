
import {ComputedRef, Ref} from "@vue/reactivity";
import {computed, ref} from "vue";
import {ComposablePagination, page, paginationEvent, UsePaginationOption} from "../types/types";
import {useUtil} from "../utils/useUtil";



/**
 * 페이지네이션 상태를 컨트롤할 수 있는 Composable입니다.
 *
 * @param {UsePaginationOption} options - 페이지네이션 옵션 객체
 * */
export const usePagination = ( options : UsePaginationOption ) : ComposablePagination => {

    const [ FIRST_PAGE ] = [ 1 ];

    const { isEmpty } = useUtil.typeValidation();

    /**
     * 옵션에서 넘겨준 현재 페이지
     *
     * @reactive
     * @type {Ref<number>}
     * */
    const _currentPage : Ref<number> = ref(options.currentPage);

    /**
     * 옵션에서 넘겨준 페이지 사이즈
     *
     * @reactive
     * @type {Ref<number>}
     * */
    const _pageSize : Ref<number> = ref(options.pageSize);

    /**
     * 옵션에서 넘겨준 보여줄 사이즈 개수
     *
     * @reactive
     * @type {Ref<number>}
     * */
    const _totalCount : Ref<number> = ref(options.visibleCount);

    /**
     * 시작 페이지를 계산합니다.
     *
     * @computed
     * @type {ComputedRef<number>}
     * */
    const startPage : ComputedRef<number> = computed(()=>{

        if ( calculation().isCurrentPageFirst() ) {
            return FIRST_PAGE;
        }

        if ( calculation().isCurrentPageBetween() ) {
            return FIRST_PAGE;
        }

        if ( calculation().isCurrentPageRangeLast() ) {
            return totalPage.value - options.visibleCount + 1;
        }

        if ( calculation().isCurrentPageLast() ) {
            return totalPage.value - options.visibleCount + 1;
        }

        return _currentPage.value - calculation().halfOfVisibleButtons();
    });

    /**
     * 전체 페이지 개수
     *
     * @computed
     * @type {ComputedRef<number>}
     * */
    const totalPage : ComputedRef<number> =  computed(() => {

        const totalPageCount = Math.floor( options.totalCount / options.pageSize );
        const evenCheckTarget = options.totalCount % options.pageSize;

        return calculation().isEven( evenCheckTarget ) ? totalPageCount : totalPageCount + 1;
    });

    /**
     * 렌더링할 페이지의 개수, startPage가 변경되면 자동으로 렌더링 됩니다.
     *
     * @computed
     * @type {ComputedRef<page[]>}
     * */
    const pages : ComputedRef<page[]> = computed(()=>{

        const visiblePage = [] as page[]

        for ( let i = startPage.value ; i <= Math.min( startPage.value + options.visibleCount - 1, totalPage.value ) ; i++ ) {
            visiblePage.push({
                index : i
            });
        }

        return visiblePage;
    });

    /**
     * 한 페이지의 startIndex
     *
     * @computed
     * @type {Ref<number>}
     * */
    const startIndex : Ref<number> = computed(()=>{

        return ( _currentPage.value - 1 ) * ( _pageSize.value + 1 )
    });


    /**
     * 페이지 네이션 내부 계산 함수
     * */
    const calculation = () => {

        return {


            /**
             * 현재 페이지가 1 페이지에 있는지 검사합니다.
             * @return {boolean}
             * */
            isCurrentPageFirst : () : boolean => {
                return 1 === _currentPage.value;
            },

            /**
             * 현재 페이지가 1 페이지에 있는지 검사합니다.
             * @return {boolean}
             * */
            isCurrentPageLast : () : boolean => {
                return totalPage.value === _currentPage.value;
            },

            /**
             * 현재 페이지가 현재 보여지는 페이지 버튼 사이에 있는지 여부
             * @return {boolean}
             * */
            isCurrentPageBetween : () : boolean => {
                return _currentPage.value < options.visibleCount;
            },

            /**
             * 총 19 페이지 중 마지막 페이지라면
             * @return {boolean}
             * */
            isCurrentPageRangeLast : () : boolean => {
                return _currentPage.value > totalPage.value - calculation().halfOfVisibleButtons()
            },

            /**
             * 현재 보여지는 페이지 중 반절 값을 반환
             *
             * @return {number}
             * */
            halfOfVisibleButtons : () : number => {
                return options.visibleCount / 2;
            },

            /**
             * 체크할 값이 짝수이면 true를 반환합니다.
             *
             * @param {number} checkTarget - 체크할 숫자
             * @return {boolean}
             * */
            isEven : ( checkTarget : number ) : boolean => {
                return 0 === checkTarget;
            }
        }
    }

    /**
     * 페이지 전환 이벤트
     * */
    const _onChangePage = ( startIndex : number ) : void => {

        if ( isEmpty( options?.onChangePage ) ) {
             return;
        }

        const onChange = options .onChangePage as paginationEvent;

        onChange( startIndex );
    }

    return {
        totalCount : _totalCount,
        currentPage: _currentPage,
        pageSize   : _pageSize,
        pages,
        startIndex,
        first      : () => ( _currentPage.value = 1 ),
        last       : () => ( _currentPage.value = totalPage.value ),
        prev       : () => --_currentPage.value,
        next       : () => ++_currentPage.value,
        clickPage  : ( { index } : page ) => {
            _currentPage.value = index;
            _onChangePage( startIndex.value );
        },
    }
}