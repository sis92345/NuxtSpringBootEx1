# Utils

`/composables`과 완전 동일한 기능입니다. `/composables` 자동 import를 지원합니다.

## Utils vs Composables
`utils`디렉토리의 주요 목적은 `/composables` Vue Composable와 다른 자동으로 가져온 유틸리티 함수를 의미론적으로 구분하는 것입니다

즉
- Vue의 Composition API를 활용하여 `stateful` 한 logic을 캡슐화하고 재사용하고 싶으면 
  - `composables` 을 사용
- `isEmpty` 같은 단순한 유틸리티성 함수를 관리하고 싶으면
  - `utils`

# TODO 
- 형태는 useUtil.getCommon