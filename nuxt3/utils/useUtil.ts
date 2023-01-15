import { _typeValidationUtil } from "./core/validation/typeValidationUtil"

/**
 * Util 모듈을 사용할 수 있도록 injection 시킵니다.
 *
 * */
export const useUtil = {

   asd : "",


    get typeValidation()  {
       return _typeValidationUtil;
    }

}