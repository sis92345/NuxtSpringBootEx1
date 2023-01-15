/**
 * 유효성 검증 유틸 > Type 검증
 * */
export interface typeValidationUtil {

    /**
     * 값이 비어있으면 true를 반환합니다.
     *
     * 1. number : 0
     * 2. string : "",
     * 3. array.length : 0
     * 4. null
     * 5. object properties가 1개도 없음
     * */
    isEmpty: (checkTarget: any) => boolean

    /**
     * 값이 비어있지 않으면 true를 반환합니다.
     *
     * @param {any} checkTarget
     * */
    isNotEmpty: (checkTarget: any) => boolean

    /**
     * 빈 객체인지 검사합니다.
     * */
    isEmptyObject: (checkObject: Object) => boolean,
}

