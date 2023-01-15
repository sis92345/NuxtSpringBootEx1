import { typeValidationUtil } from "../../../types/types";

export const _typeValidationUtil = () : typeValidationUtil => {


    const isEmpty = ( value : any ) =>  {

        if ( typeof value === "number" && value > 0 ) {
            return false
        }
        else {
            return ( isEmptyObject( value ) ||
                value === null
                ||  value.length === 0
                || value === false
                || value === "");
        }
    }

    const isNotEmpty = ( val : Object ) : boolean => {
        return !isEmpty( val );
    }

    const isEmptyObject = ( obj : Object ) : boolean => {
        // eslint-disable-next-line no-unreachable-loop
        for ( const name in obj ) {
            return false;
        }
        return true;
    }

    return {
        isEmpty,
        isNotEmpty,
        isEmptyObject,
    }
}
