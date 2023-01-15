// parser: '@typescript-eslint/parser',
// '@typescript-eslint',
/**
 *  esLint 에러나면 IDE 껏다 키시면 됩니다!
 */
module.exports = {
	parser : "vue-eslint-parser",
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	globals: {
		"_": true,
	},
	
	parserOptions: {
		/**
		 *  - js parser
		 *
		 *  parser: '@babel/eslint-parser',
		 *
		 *  - ts parser
		 *
		 *  parser: @typescript-eslint/parser,
		 *  // require.resolve('@typescript-eslint/parser'),
		 */
		
		parser : {
			js : "@babel/eslint-parser",
			ts : "@typescript-eslint/parser",
		},
		
		requireConfigFile: false,
		ecmaVersion: 2018,
		sourceType: 'module',
		// extraFileExtensions: ['.vue'],
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'plugin:vue/essential',
		"plugin:@typescript-eslint/eslint-recommended",
	],
	plugins: [ '@typescript-eslint' ],
	// add your custom rules here
	/**
	 * rule 설정하는 방법
	 *
	 * 1. https://eslint.org/docs/rules에서 원하는 룰을 검색
	 * 2. 룰 레벨 -> 0 : off  , 1 : 경고 , 2 : error
	 * 3. 배열로 넘길 시 추가 옵션 설정 가능
	 * */
	rules: {
		
		/**
		 * @rule : yoda
		 * @desc "red" === color
		 * @ruleLevel : 1 ( warn )
		 * @option : always ( 무조건 yoda 문법 )
		 * @see https://eslint.org/docs/rules/yoda
		 * @author ted
		 * */
		"yoda" : [ 1 , "always" ],
		
		/**
		 * @rule : spaced-comment
		 * @desc // or /* 바로 뒤에 공백을 강제함
		 * @ruleLevel : 0 ( off )
		 * @option : never ( 주석 첫 공백 없도록 설정 )
		 * @see https://eslint.org/docs/rules/spaced-comment
		 * @author ted
		 * @version 1.1 2022.05.27 ted - ruleLevel 변경
		 * */
		"spaced-comment" : [ 0 , "never" ],
		
		/**
		 * @rule : brace-style
		 * @desc 중괄호 스타일 설정
		 * <pre>
		 *   - 1tbs
		 *   - stroustrup
		 *   - allman
		 * </pre>
		 * @ruleLevel : 1 ( warn )
		 * @option : stroustrup , allowSingleLine 허용
		 * <pre>
		 *  - stroustrup
		 *  if () {
		 *    foo();
		 *  }
		 *  else {
		 *    bar();
		 *  }
		 *  - allowSingleLine ( default : false ) - 시작 블록과 끝 블록이 같은 라인에 있는 것을 허용
		 *  if () { foo() } else { bar() }
		 * </pre>
		 * @see https://eslint.org/docs/rules/brace-style
		 * @author ted
		 * */
		"brace-style" : [ 1 , "stroustrup" , { allowSingleLine : true } ]
	},
}
