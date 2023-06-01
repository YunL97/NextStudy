* Nextjs는 모든 리액트 프로젝트에서 아주 흔히 계속해서 일어나는 문제점을 해결하기 위한 솔루션을 제공
* nextjs: 프로덕션용 리액트 프레임워크, 풀스택 프레임워크
* 리액트: 사용자 인터페이스 구축을 위한 자바스크립트 라이브러리 => 서드파티 라이브러리
* nextjs는 리액트 상에 구축된 프레임워크
* 프레임워크와 라이브러리의 차이점은 프레임워크 규모가 더욱 크다는, 코드륵 어떻게 작성해야 하는지, 어떻게 파일을 구조화 해야하는지에 대한 거 명확한 규칙과 가이드라인이 있음
* nextjs는 리액트를 강화시키고 대규모 앱 구축을 쉽게해준다
* 가장중요한 기능은 서버 측 렌더링 지원!
* 리액트는 클라이언트 자바스크립트 라이브러리이기 때문에 렌더링이 전부 사용자의 브라우저측에서 렌더링 됨
* 리액트만 사용하면 화면이 깜박거리는 로딩을 보는데 클라이언트 측에서 자바스크립트 코드가 실행된 뒤에 데이터 페칭이 시작되기 때문 => next를 사용하는 깜빡임 현상을 겪지 않아서 로딩경험 개선
* nextjs 를 사용하면 컴포넌트를 서버측에서 미리 렌더링해주기때문에 seo에 적합
* next를 사용하면 클라이언트측 및 서버측의 코드가 융합!
* 파일기반 라우팅: 리액트에는 라우터가 아예없다 리액트는 url을 확인해서 브라우저가 요청을 서버로 보내는 기본동작을 방지하고 대신에 react를 통해 페이지 상에 다른 콘텐츠를 렌더링 리액트 라우터는 별도의 코드를 따로작성해야한다. 그리고 개별 폴더에 페이지로서 작동하는 컴포넌트를 저장하는데 이 컴포넌트가 코드내에서 라우트 설정을 모방한다고 볼수있음 -> 페이지와 코드로 설정된 세개의 페이지가 있다면 페이지 컴포넌트 폴더에 페이지 컴포넌트가 3개 있는것
* next를 사용하면 코드내 라우트 정의를 사용할 필요가 없음, 파일과 폴더에 페이지와 라우트를 정의
* next를 사용하면 개발자들이 리액트 프로젝트에 백엔드 코드ㅡㄹ 추가하는 작업도 수월하게 가능
* next를 사용하면 nodejs 코드를 통해 아주 쉽게 백엔드 api를 리액트 프로젝트에 추가 가능 -> 독립적인 api 프로젝트를 구축할 필요 없이 하나의 프로젝트로 작업가능
* next는 저장하면 페이지를 새로고침하고 업데이트해준다
* 인증을 추가하는 부분에서 리액트 앱보다 더 간편
* next는 코드기반 라우팅이 아닌 파일기반 라우팅
* index.js 를 제외하고 다른 js파일을 통해서 요청의 파일내에 반환된 컴포넌트를 렌더링 하는것으로 추론
*  페이지 만드는법
   *  pages 밑에 .js
   *  pages 밑에 폴더하나만들고 아안에 index.js 만들기 ex) pages -> about폴더 -> index.js => /about 치면 index.js가 나옴
   * /about/list 로 가는법: about 폴더안에 list.js 만들면댐
 
 * 동적 라우팅 하는법: [projectIid].js
 * 동적라우팅은 언제사용하냐
   * 여러종류의 데이터를 불러와야하는 페이지를 생성할때 ex) 온라인 스토어 상품 or 블로그 게시글
   * 프로젝트 여러개를 포트폴리오 페이지에 불러올때
* 사용자가 url에 입력한 구체적인 값에 엑세스 하는법: next/router 라이브러리에 있음 -> useRouter()
* useRouter: 우리에게 유용한 데이터 조각과 메서드 여러개 제공

* 동적 라우팅 다른방법
  
```
pages(폴더)
ㅣ
ㅣ--clients(폴더)
        ㅣ
        ㅣ-[id](폴더)
            ㅣ[asd].js: 동적폴더에 중첩된 동적폴더나 동적 파일을 추가가능
            ㅣindex.js

//결과값이 3000/clients/max/project1
//로그 찍어보면 id: "max", asd: "project1"
```
