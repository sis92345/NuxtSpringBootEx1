import {Ref} from "@vue/reactivity";

/**
 * 페이지네이션 구현 정보
 * */
export export interface ComposablePagination {

    /**
     * 보여줄 페이지 사이즈
     *
     * @reactivity
     * @type {Ref<number>}
     * */
    pageSize : Ref<number>

    /**
     * 한 페이지의 총 개수
     *
     * @reactivity
     * @type {Ref<number>}
     * */
    totalCount : Ref<number>

    /**
     * 현재 페이지
     *
     * @reactivity
     * @type {Ref<number>}
     * */
    currentPage : Ref<number>

    /**
     * 페이지 사이즈
     *
     * @reactivity
     * @type {Ref<number>}
     * */
    startIndex : Ref<number>

    /**
     * 페이지 목록을 추출해서 반환합니다.
     *
     * @reactivity
     * @type page[]
     * */
    pages : Ref<page[]>


    /**
     * 다음 페이지로 전환합니다.
     *
     * @function
     * @type paginationControl
     * */
    prev : paginationControl,

    /**
     * 다음 페이지로 전환합니다.
     *
     * @function
     * @type paginationControl
     * */
    next : paginationControl,

    /**
     * 첫 페이지로 전환합니다.
     *
     * @function
     * @type paginationControl
     * */
    first : paginationControl,

    /**
     * 마지막 페이지로 전환합니다.
     *
     * @function
     * @type paginationControl
     * */
    last : paginationControl,

    /**
     * 페이지를 클릭합니다.
     *
     * @event onclick
     * */
    clickPage : ( pageObj : page ) => void ,
}

export interface UsePaginationOption {

    /**
     * 페이지 사이즈
     *
     * @reactivity
     * @type {number}
     * */
    pageSize : number

    /**
     * 페이지 사이즈
     *
     * @reactivity
     * @type {number}
     * */
    totalCount : number

    /**
     * 페이지 사이즈
     *
     * @reactivity
     * @type {number}
     * */
    currentPage : number

    /**
     * 한 페이지에 보여줄 페이지 버튼의 개수
     *
     * 디폴드 구현 필요
     * @reactivity
     * @type {number}
     * */
    visibleCount : number

    /**
     * 페이지 전환 이벤트
     *
     * @event onclick
     * */
    onChangePage : ?paginationEvent

}

/**
 * 페이지네이션 컨트롤 함수
 * */
export type paginationControl = () => void;

/**
 * 페이지네이션 이벤트 > 콜백 형태로 구현
 *
 * @param {number} startIndex : 페이지 클릭시 사용하는 startIndex
 * */
export type paginationEvent = ( startIndex : number ) => void;

/**
 * 페이지 객체
 *
 * */
export type page = {
    index : number
}