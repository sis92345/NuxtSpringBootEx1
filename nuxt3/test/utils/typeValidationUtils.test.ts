import {useUtil} from "../../utils/useUtil";

const fc = require('fast-check');


describe( "TypeValidationUtil.isEmpty는 빈 값으로 간주할 경우 true를 반환한다." , () => {

    const { isEmpty } = useUtil.typeValidation();

    it( "빈 string을 받으면 빈 값으로 판단한다." , () => {

        expect( isEmpty( "" ) ).toBeTruthy();
    });

    it( "null을 받으면 빈 값으로 판단한다." , () => {

        expect( isEmpty( null ) ).toBeTruthy();
    });

    it( "배열의 길이가 0이라면 빈 값으로 판단한다." , () => {

        expect( isEmpty( [] ) ).toBeTruthy();
    });

    it( "false는 빈 값으로 판단한다." , () => {

        expect( isEmpty( false ) ).toBeTruthy();
    });

    it( "빈 객체는 빈 값으로 판단한다." , () => {

        expect( isEmpty( {} ) ).toBeTruthy();
    });

    it( "Javascript에서 falsy한 값은 모두 빈 값으로 간주한다." , () => {

        fc.assert( fc.property(
            fc.falsy(),
            ( falsyVal : false|0|undefined|""|0n ) => {

                isEmpty( falsyVal );
            }
        ));
    });
} );

describe( "TypeValidationUtil.isNotEmpty는 빈 값이 아닐 경우 false를 반환한다." , () => {

    const { isEmpty , isNotEmpty } = useUtil.typeValidation();

    it( "isNotEmpty의 값은 항상 isEmpty의 반대 값이다", () => {

        fc.assert( fc.property(
            fc.falsy(),
            ( falsyVal : false|0|undefined|""|0n ) => {

                expect( isNotEmpty( falsyVal ) ).toBe( !isEmpty( falsyVal ) );
            }
        ));
    });


} );

describe( "isEmptyObject는 객체의 프로퍼티가 하나도 없을 경우 true를 반환한다." , () => {

    const { isEmpty , isNotEmpty , isEmptyObject } = useUtil.typeValidation();

    // @see http://blog.woong.org/v/551d17b906c2ab0c569cebda
    it( "isEmptyObject는 반복문을 통해 프로퍼티를 체크하기 때문에 비열거형 프로퍼티만 있는 객체는 빈 값으로 체크된다.", () => {

        const obj = {
                assertTarget: {}
        }

        Object.defineProperty( obj, 'assertTarget', {
            value: {
                test : ""
            },
            writable: true,
            enumerable: false,
            configurable: true
        });

        expect( isEmptyObject( obj ) ).toBeTruthy();
    });

    // @see http://blog.woong.org/v/551d17b906c2ab0c569cebda
    it( "객체의 프로퍼티가 하나도 없을 경우 빈 객체로 판단한다", () => {

        fc.assert( fc.property(
            fc.object({ maxKeys : 0 }),
            ( obj : Object  ) => {

                expect( isNotEmpty( obj ) ).toBe( false );
            }
        ));
    });

} );