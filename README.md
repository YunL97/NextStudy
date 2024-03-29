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

* [...asd].js 사용하면 useRouter 찍을때 배열나옴 ex)20/2022 -> [20, 2022]
* Link 컴포넌트 기능
  * 링크에 마우스를 갖다대자마자 이동하려는 페이지로자동으로 데이터를 미리 페칭
  * replace를 설정하면 새로운 페이지를 또띄우지 않고 현재 페이지를 새 페이지로 변경 -> 뒤로가기 불가
```
// next에서 원하는 특수객체
client.map((client) => {
    <li key = {client.id}>
        <Linkj href = {{
            pathname: '/clients/[id]',
            query: {id: client.id} 
        }}{client.name}</Link>
})

```
* 명령형: 어떻게
* 선언형: 무엇을

* 404.js 만들면 404 뜰때 이페이지로 들어감

* ## index.js 파일은 항상 지정될 폴더의 루트 페이지
* next를 사용하면 pages 폴더를 구성하는 폴더 구조를 통해 애플리케이션에 지원하는 모든 경로를 처리할 수 있다.
* next에 public 폴더: 반드시 있어야함 next에서 특수한 역할을 한다. 이 폴더에 저장되어 있는 이미지나 글꼴 같은 데이터들은 next에서 정적인 데이터로 적용하기 때문에 css나 html 코드에서 참조  할 수 있다.
* public 폴더밖의 파일과 폴더는 next에서 접근하지 못한다 => public 폴더 밖에있는 폴더나 파일에 접근해야 하면 해당 파일을 public로 복사하거나 next 프레임워크의 서버측 코드에서 파일을 읽어와서 처리해야한다
* pages폴더에는 각 페이지에 쓰이는 컴포넌트만 있어야한다 -> 이 폴더에 들어가 있는 파일을 새로운 라우트를 자동으로 생성하기 때문

* Link안에는 앵커태그가 있는데 앵커태그는 링크를 클릭했을때 일어나는 동작을 제어한다
* next는 _app 컴포넌트를 이용해서 페이지 콘텐츠를 전달하고 페이지를 이동할 때 컨텐츠를 표시해준다
* Fragment 컴포넌트: 
  * 불필요한 DOM 노드 생성방지
  * 부요요소없이 여러요소반환
  * div를 사용할수도 있지만 그러면 내생각과는 다르게 css가 들어갈 수 있음
  
* next는 서버사이드에서 페이지를 사전 렌더링 해주는데 이점이 아주중요
* 리액트에서는 컴포넌트가 로딩된후에 데이터를 패칭 -> 즉 클라이언트 사이드에서 데이터를 페칭하고 화면에 렌더링 된후에 서버로 요청을 보낼 수 있다. => 사용자가 처음 페이지를 방문했을 때 서버가 클라이언트에게 재전송하는 페이지는 그 데이터를 포함하고 있지 않다는점이 문제
* next는 사전렌더링 된 페이지를 전송하고 javascript 코드를 재전송  -> 재전송된 자바스크립트 코드는 나중에 사전 렌더링 된 페이지를 대체하고 이에 react가 알맞은 작업을 수행
* next는 라우트에 요청이 전송된 경우 즉 사용자가 해당 페이지를 방문하면 바로 사전 렌더링된 페이지를 반환, 이게 react와의 차이점 react는 빈 html 파일과 모든 javascript 코드가 표시된다
* 즉 사전에 html 페이지를 완성해놓고 완전히 채워진 html 파일을 클라이언트 즉 페이지의 방문자에게 전송 -> seo 관점에서 아주중요
* next는 사전렝더링된 페이지를 재전송하는데 그치지 않고 포함된 자바스크립트 코드를 모두 재전송 -> 재전송된 자바스크립트 코드는 나중에 사전 렌더링된 페이지를 대체하고 이에 react가 알맞는 작업을 수행 -> 이때 처음에 재전송한 사전 렝더링된 페이지에는 주요 콘텐츠가 모두 포함 -> 검색엔진 크롤러도 전체 페이지에  이미 포함된 모든 콘텐츠를 살핀다
* 이런 재전송을 해당페이지에 대해 수화(hydrate: 수분유지) 라고한다
* 사전 렌더링은 오직 최초 로딩할때만 영향을 미친다. -> 첫번째 렌더링이 끝나고 나면 다시 표준 싱글페이지 애플리케이션으로 돌아간다 -> 이때부터 react가 프론트엔드에서 모든처리를 수행
* 페이지가 바뀔때 사전렝더링 하지않고 리액트를 통해 클라이언트 사이드에서 생성 -> 사전렌더링 되는건 최초 접속하는 첫번째 페이지뿐
* next에는 두가지 사전렌더링 양식이 있음
  * 정적생성: 빌드되는 동안 모든 페이지가 사전 생성되는것 -> 프로덕션용 애플리케이션을 구축하면 배포전에 모든페이지가 준비된다는것 -> 일반적으로 권장되는방법 
  * SSR: 배포후 요청이 서버까지 오는 바로 그때 모든페이지가 생성
* 정적생성: 배포되고 나면 구축된 페이지는 서버나 앱을 실행시키는 CDN을 통해 캐시로 저장
* 정적생성을 하려면 React 컴포넌트가 아닌 pages 폴더의 component 파일 내부에 특수한 비동기함수인 getStaticProps를 가져와야한다
* getStaticProps 함수는 보통 서버사이드에서만 실행되는 모든 코드도 실행 가능 -> 특정 클라이언트 사이드 api에 엑세스가 없거나 윈도우 객체에 대한 엑세스가 없는 일반적으로는 서버사이드에서만 가능한 모든 코드도 실행가능
* getStaticProps 내에 작성한 코드는 클라이언트에게 재전송되는 코드로 포함하지 않는다 -> 해당 함수내에 포함하는 코드는 클라이언트는 볼수 없다 -> 노출하고 싶지 않는 코드를 여기에 작성하면 된다.
* next는 동적 데이터가 없는 모든페이지를 사전 렌더링한다
```
//두번째 실행
function HomePage(props) {
  return (
    <ul>
      <li>props.products[0].id</li>
      <li>b</li>
      <li>c</li>
    </ul>
  );
}

//첫번째 실행
export async function getStaticProps(context) { //컴포넌트에 대한 프로퍼티를 준비 즉 이 props 객체를 준비

if(!data) {
  return {
    redirect: {
      destination: '/no-data'
    }
  };
}

if (data.products.length === 0) {
  return { notFound: true};
}
  return {
    props: {
        products: [{id: 'p1', title: 'asd'}]
      },
      revalidate: 60
    };
  }

export default HomePage;
```
* next는 getStaticProps 에 쓰이는 임포트를 확인하고 클라이언트 사이드 코드 번들에서는 이 이폼트를 제거
* 프로덕션 빌드하려면 num run build ("build": "next build") 하고 npm start("start": "next start")
* ISR(증분 정적 생성): 페이지를 빌드할때 정적으로 한번만 생성하는것이 아니라 배포후에도 재배포 없이 계속 업데이트되는것, 초 설정해놓으면 ex 60초 설정해서 60초가 지나지 않았으면 기존 페이지가 방문자에게 제공된다는 뜻
* ISR 설정 하려면 getStaticProps에 return 두번째 인자에 revalidate에 설정해주면된다 -> 새로고침했을때 60초가 안지났으면 원래 데이터 보여준다
* getStaticProps(context) context 매개변수: next로 실행될때 페이지에 대한 추가 정보를 가진 매개변수
* notFound: true로 해놓으면 404 오류 페이지를 렌더링, 이 키를 사용하는 이유는 데이터를 페치하는 이 코드가 어떤 이유로든 페칭에 실패하면 그 작업을 할 수있는데 ex 작품이 없을 땐 getStatucProps() 안에 객체를 반환 하는데 notFound를 true로 설정해서 404 페이지를 보여주고 페치된 데이터가  한개라도 있으면 일반 페이지를 반환
* redirect: 사용자를 리디렉션 가능 -> 페이지 콘텐츠나 컴포넌트 콘텐츠를 렌더링하지 않고 다른페이지, 즉 다른 라우트로 리디렉션 하는것 -> 역시 데이터 페칭에 실패할 경우 필요한 설정
* next는 기본적으로 페이지를 사전생성하는데 동적페이지는 그렇지 않음 -> next가 사전에 동적페이지를 위해서 얼마나 많은 페이지르 미리 생성해야 하는지 알지못하기때문
* 동적 페이지에서 getStaticProps를 사용하면 오류를만날 확률이 높음
* 동적페이지에는 getStaticPaths() 를 사용하는데 getStaticProps처럼 page 컴포넌트파일에만 추가할수 있는 함수 next가 인지하도록 함수를 export 해야함
* getStaticPaths: 동적 페이지의 어떤 인스턴스를 생성할지 next에 알리는것 -> getStaticPaths 를사용한 페이지에 들어가면 다른페이지로 가는 데이터를을 사전에 페칭해준다. 미리페칭된 데이터를 우리대신 로딩하고 읽는데 그러면 우리가 페이지로 이동한후 데이터를 페칭할 필요가 없다. -> ex) product1 페이지로 이동하기도 전에 product1 페이지를 보여주기위한 데이터는 이미 훨신 존재하기 때문에 훨씬 빠르다
```
export async function getStaticPaths() {
  return {ㅔ
    paths: [
      { params: {pid: 'p1'}},
      <!-- { params: {pid: 'p2'}}, -->
      { params: {pid: 'p3'}},
    ],
    fallback: false
  } //동적페이지가 세번 사전생성되어야 하며 세가지 값을 가진다는 사실을 next에 알린다
}
```
* fallback: 상품이 수백만개 인 웹사이트는 사전생성을 하기가 매우어려움 true로 설정하면 사용자에게 자주 보여지는 화면만 사전 생성 가능
* fallback를 사용하지 않은 페이지 p2 페이지를 사전렌더링하지 않으면 링크클릭해서 들어갈 수는 있지만 url에 직접 쳐서들어가면 에러가남
* 그러면 props 에서 !loadedProduct === false 면 리턴을 해주면된다
* fallback: 'blocking': 컴포넌트에서 폴백 확인할 필요가 없음 -> 페이지가 서비스를 제공하기전에 서버에 완전히 사전 생성되도록 next가 기다린다 -> 페이지 방문자가 응답받는 시간은 길어지지만 수신된 응답은 종료된다 -> 다시 새로고침해도 시간이 걸릴 뿐 잘 작동한다
* blocking을 쓰는 경우는 방문자에게 불완전한 페이지를 보고싶지 않은경우 사용 -> ex) Loading....
* fallback을 true을 설정하면 파일에서 찾을 수 없는 id에 대해서도 페이지를 렌더링 할 수 있다 -> props.loadedProduct 사용 후 데이터를 로드해도 데이터가 안들어오면 또 에러가남 -> getStaticProps 에  return { notFound: true}; 사용하면된다
* getStaticProps, getStaticPaths 는 정적생성
* 정적생성만으로 충분하지 않을때가 있는데 이때 실제로 서버사이드렌더링이 필요
* getServiceSideProps 서버사이드 렌더링에 사용하는 함수, 유입되는 모든요청에 대해서만 재실행 getStaticProps와 충돌하기떄문에 둘중 하나만 사용해야함 둘다 컴포넌트의 프로퍼티를 가져오는함수로 next가 해당 컴포넌트를 렌더링 할 수 있지만 실행되는 시점에는 차이가 있음
* getServiceSideProps는 getStaticProps와 같은 포맷 으로 설정 -> 객체반환하는부분이 똑같음
* getServiceSideProps는 모든 요청에  대해서 페이지를 즉시 서버에 사전렌더링한다
* getServiceSideProps는 매 요청마다 모든 요청을 거쳐야 하기때문에 필요없을때는 사용하지 않는게 좋다
```
function UserProfilePAge(props) {
  return <h1>props.username</h1>
}

export default UserProfilePage;

export async function getServerSideProps(context) { // 배포된 서버와 개발서버에서만 실행된다는점, 사전에 생성된 정적함수는 아님
  return {
    props: {
      username: 'Max'
    }
  }
}
```
* SWR훅: next팀에서 개발한 리애그 훅, next가 아닌 프로젝트에서도 사용가능, http요청, 캐싱 및 자동 유효성 재검사, 에러시 요청재시도( 리액트쿼리랑 같은듯?)
* swr보다는 서버사이드 렌더링을 사용하면 리액트쿼리를 사용하는게 훨씬 좋을듯
* getStatic 이나 getservervice 에서는 리액트훅 사용불가 -> 리액트 컴포넌트가 아니기 때문
* fetch는 사용가능
* npm run build -> npm start -> 프로덕션 준비 번들이 포함된 프로덕션 서버 시작
* 파일기반의 라우팅은 이미 훌륭한 기능이지만 사전 페칭과 사전 렌더링이야말로 next를 대단히 강력하게 만드는 기능 -> 페이지를 쉽게 검색엔진 최적화를 할수있고 사용자에게 처음부터 데이터를 표시할수있고 react와 관련된 모든것을 적용가능하다
* 동적 페이지할때는 paths -> props -> react 함수 로 return 된다
* [...asd] 같은 페이지를 사용할때 제한이 있으면 getStaticProps사용해도 되나 범위가 넓다면 getServerSideProps가 더 낫다
* getServerSideProps와 클라이언트 사이드 데이터 페칭은 양립할 수 없다.
* 검색으로 화면을 그리는 경우 클라이언트 사이드렌더링을 해도된다 -> 검색엔진이 크롤링할 중요한 부분은 아니다
* 검색같은 경우는 해당 페이지로 빠르게 이동하는게 중요하기 때문
* 데이터를 최신상태로 유지하기위해 새로운요청마다 getServerSideProps 함수가 실행된다
* 근데 검색을 할때 요청헤더 분석이 필요한 경우가 있으면 getServerSideProps 을써야한다
* head섹션에는 브라우저와 검색엔진에서 요청을 통해 불러오는 중요한 메타데이터와 점보가 담겨있다
* 메타데이터가 있어야 사용자 경험의 질을 원하는정도까지 끌어올릴 수 있다
* 검색엔진 크롤러가 확인하는게 바로 메타데이터에 설정된 제목과 설명
* next의 Head 컴포넌트를 사용하면 head 태그에 쉽게 데이터를 넣을 수 있다
* Head컴포넌트는 맨윗줄에 추가할 필요 없이 jsx코드의 아무 부분에 추가해도 된다라는 장점이 있음
* meta태그는 매우 특수한 태그인데 검색엔진에 없어서는 안될 태그 -> 설명문이 content속성에 추가 됐는데 google과 같은 검색엔진에서 검색결과를 출력할 때 같이 출력되는 설명문이 되기 때문
```
<Head>
  <meta name="description" content="asdasd">
<Head>
```
* 자주 사용하는 코드가 있으면 항상 재사용할수 있는방법을 생각해내자
* Head 태그를 여러개 사용해도 next가 알아서 가장 최근에 있는 head 태그만 보여준다 
* _document.js: 전체 html 문서를 커스터마이징 할 수 있게해준다. 방문자가 볼수있게 페이지를 시각적으로 준비할 뿐만 아니라 올바른 메타 데이터를 설정할 수 있게 된다
* _app.js: 애플리케이션 Shell, html문서의 body 섹션 속 루트 컴포넌트라고 생각하면 된다
* 1rem = 16px
* next의 image 생성기능으로 이미지 최적화 가능
* image 컴포넌트는 lazy load 기능이 있어서 보이지 않는 상태에서는 next가 다운로드 하지 않음
```
<Image src={`${image}` alt={imageAlt}} width={160} height={160}/>
```
* json 형식이 기계와 사람 모두에게 데이터를 처리 하기 좋아 사실상 apu를 통한 데이터 교환에서의 표준 형식이 되었다. json 메서드를 이용하면 js값을 객체로 취급해 자동으로 json 형식으로 변환해준다.
* pages -> api -> feedback.js
```
// /api/feedback url에 치면 message 반환
function handler(req, res) {
  res.status(200).json({ message: 'This works!' });
}

export default handler;

 
```
* 데이터베이스 크리덴셜(데이터베이스에 접근하고 관리하기 위해 사용되는 인증정보)을 프론트엔드 코드에 노출하면 보안이 매우 취약하기 때문에 프론트 -> 데이터베이스 로 바로 데이터를 쏘는 행위는 좋지 않음
* preventDefault 를 사용하는 이유는 form에 submit 이벤트와 연결되어 있을때 해당 이벤트에서 기본동작을 중지시키고 싶을 때 사용한다 
* api route를 사용하는이유
  * route를 사용하면 next의 서버 사이드 렌더링 기능과 연동하여 데이터를 사전에 가져와 페이지를 렌더링가능
  * 서버로직분리: 클라이언트와 서버간의 로직을 분리하여 유지 관리하기 쉽다.
  * api route를 사용하면 클라이언트 측에서 직접 외부 api or 데이터베이스에 접근하는것보다 더 높은 수준의 보안을 제공 -> 배포할때 page/api는 서버 사이드로만 번들링 된다
  * api라우트는 간단한 백엔드 기능을 처리하는데 특화되어 있음
  * api라우트는 next에플리케이션의 일부로서 프론트엔드와 백엔드를 통합하는데 사용

* page 파일에서 fetch('/') 에서 / 로 시작하는 것만으로도 자동을 도메인 주소 뒤에 붙어 절대경로로 작용하기 때문에 자동으로 같은 도메인에 전달된다
 ex) api라우트를 통해서 데이터를 가져오는경우
* 클라이언트사이드를 통해 데이터를 가져오는 경우는 fetch('/api/feedback', { method: 'POST' }) 사용
* /api/feedback/id : id 를 처리하고 싶으면 api 밑에 [feedbackid].js 파일을 만들면된다.
```
function handler(req, res) {
  const feedbackId = req.query.feedbackId; // feedbackid 는 파일 제목으로 썼던 대괄호 안의 문자열
}
```
* onClick 사용할때 () => 를 사용하지 않으면 함수가 즉시 실행된다
* api route를 사용할때 feedback.js, [feedbackId].js 가 있으면 /api/feedback 를 부를때 [feedbackId].js가 타질수도 있는데 이는 next가 알아서 주어진 경로 값에 보다 구체적인 페이지가 있으면 포괄적인 동적파일보다는 경로에 더 적절한 구체적인 파일을 사용한다
* api라우트는 뉴스레터를 구독하는것과 같은 api에 기반한 추가기능을 다른 api 백엔드를 구축할 필요 없이 웹사이트에 더할수 있게 핸준다.
* 변수 앞에 ! 붙이면 null, undefined, '', 0, false 같은 것짓으로 평가되는 값이 아닐경우에는 false를 반환하고 null 값같은경우에는 true를 반환한다.
* 프론트 코드에서 유효성 검사 기능을 추가해도 유효성 검사 절차를 회피할 방법이 많다. 프론트엔드 코드는 사용자에게 노출 되어있다보니 조작의 위험성이 많기 때문
* 프론트 코드에서느 그저 사용자의 편의기능을 생각하기만 하면 될듯 ?
```
fetch('/api/newSletter', {
  method: 'POST',
  body: JSON.stringify({emiail: enteredEmail}),
  headers: {
    'Content-type': 'application/json' // 이거 써주는 이유: body에 json데이터로 전환했기 때문에 bodyt데이터를 api라우트가 식별하고록 해야하기 때문
  }
})
```
* 클라이언트 사이드 애플리케이션과 달리 서버사이드 유효성 검사는 속일 수 없음
* db 연동해서 데이터가져오는건 무조건 서버사이드에서
* 데이터를 넣거나 가져올 때 아무리 가능성이 희박하더라도 실패할 수 있다. => try catch문 사용하여 에러를 잡으면 된다
  
* export: export한 이름으로만 가져올 수 있으므로 어떤것을 import 하는지 정확히 알 수 있다
* export default: export한 이름이 아닌 원하는 이름으로 import 가능
* => 팀원과 개발할때는 export 쓰는게 좋음
* then은 복잡한 비동기 로직이나 여러개의 비동기 작업을 병렬로 처리해야할때 사용
* awit 은 단순한 비동기 작업이나 순차적인 비동기 작업을 처리해야할때 await을 사용하는것이 가독성 면에서 유리
* 프로젝트에서 일관성을 유지하기 위해 await 이나 then중 한가지 방식을 사용하는 것이 좋음
* 결론적으로 개인적인 취향과 프로젝트 요구사항에 따라 다름
* awiat 단점: 프로미스를 기다리는 동안 해당 스레드를 차단해야하므로 다른 작업을 동시 처리 할수 없는경우 성능에 영향을 준다
* Link 기능: Link에 입력하는 자식이 일반 텍스트가 아닐경우 즉 link에 컴포넌트나 다른 html콘텐츠를 입력할때에는 link가 기본값으로 앵커 태그를 렌더링 하지 는다. -> 일반 텍스트를 입력했을때에만 앵커태그를 렌더링 
```
<Link href = '/'><a><Logo/></a></Link> => 이런식으로 해야함
<Link href= '/posts'> posts</Link>
```
* 컴포넌트를 사용해서 데이터를 가져올 때 const {a, b, c} = props 로 가져올지, props.a, props.b, props.c 로 꺼내쓸지는 개발자마음
* Image 컴포넌트에 layout= "responsive" 를 넣으면 레이아웃을 반응형으로 바꿔준다
* asdasd.md: 마크다운 파일
* 마크다운 파일 위에 
```
---
---
```
* 짝대기 2개 사용하면 메타데이터를 쉽게 넣을 수 있음
* product 모드 실행하는법: npm run build -> npm start
```
api에서
try {
  client = await asd();
} catch () {
  res.status.(500).json({message: 'could not connect'});
  return;
}
```
*  useEffect에서 return은 unmountted될때 사용 참조형식으로써야함 ex) return () => asd();
* _document.js
```
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div> //포탈 연결
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```
* react portal: 컴포넌트 트리 어ㅓ디에서나 컴포넌트를 렌더링해주는 기능
```
import ReactDOM from 'react-dom';

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
```
* next빌드에는 표준빌드, 정적 빌드 두가지가 있음
* 표준빌드(standard build): package.json안에 있는 빌드 스크립트를 실행하면 애플리케이션에 최적화된 프로덕션용 빌드 번들을 생산, next build의실행결과 -> node.js 서버가 실행해야하는 출력값이 나온다 
* 표준빌드로 배포하면 코드가 바뀔때마다 앱을 재배포해야한다
* nextdptj빌드할때 node.js서버가 필요한이유는 사전생성 및 서버에서만 실행될수 있는 코드가 있기 때문  -> node.js를 실행할 수 있는 호스트에 배포해야함
* 정적빌드(full static build): next export를 이용해 배포 package.json 에 "export": "next export" -> 100% 정적 애플리케이션
* 정적빌드를 하면 html, css, js로만 구성되어있고 서버 사이드코드는 없음 -> 동적인 것이 없을때사용
* 그냥 왠만하면 표준빌드 해야겠네
* next/image 이미지를 사용하는 곳이라면 어디든 최적화된 이미지가 뜬다, 게시물 콘첸츠에도
* next는 기본설정을 사용해오는데 프로젝트의 설정을 변경하고 싶을때는 next.config.js 라는 파일을 사용해야함 -> 왠만해서는 사용할 일이 별로 없음 -> 기업에서는 사용해야겠네 webpack이랑 같이사용하는건가
```
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')//개발단계, product단계 지정할때 사용
module.exports = (phase) => { //이런식으로 분기처리가능
  if (phase === PHASE_DEVELOPMENT_SERVER) {
  return {
    env: { 
    customKey: 'asdasd'
  }
  }
  }
}  

function as() {
  return <h1>aaa: {process.env.customKey}</h1>
}
```
* 프로덕션 실행하는법 node.js를 지원하는 원격 컴퓨터로 옮기고 npm install(의존성설치) -> next start 하면 프로덕션 준비 
* next에 잘맞는 호스팅 제공자는 vercel (카페24도 제공)
* github에 코드푸시하면 vercel이 계정으로 이를 연결해서 저장소에 있는 코드에 변화가 생길때마다 vercel이 재배포한다
* 사이트간 스크립팅공격(Cross Site Scripting)XSS: 게시판이나 웹 메일등에 자바스크립트와 같은 스크립트 코드를 삽입해서 개발자가 고려하지 않은 기능을 작동하게 하는 치명적일 수 있는 공격
* 싱글페이지 어플리케이션을 구축할때 세션보다는 토큰을 주로이용한다
* 서버는 인증된 클라이언트에 대한 정보를 저장하지 않는 대신 클라이언트가 본인이 인증되었음을 증명하는 독립적인 권한을 얻어야하는데 이게 토큰 ex) json웹토큰
* 제이슨 웹 토큰은 암호화 되지 않고 키가 없어도 열어서 내부 데이터를 읽을 수 있음 -> 키는 주어진 서버가 그 토큰을 생성했다는 사실만 증명
1. 사용자가 로그인 시 올바른 사용자임을 확인하고, 클라이언트에게 Access Token(JWT)을 발급

2. 클라이언트는 전달받은 토큰을 저장해 두고, 인증이 필요한 요청마다 토큰을 HTTP 헤더에 담아 보냄

3. 서버에서는 암호화된 토큰을 복호화 해 올바른 요청인지 확인

4. 인증이 완료되고 서버는 요청에 응답

* 데이터 베이스에 비밀번호를 저장할때는 그대로 저장해서는 안된다 -> 해킹당해서 직원이나 제 3자가 데이터를 열람하면 모든 사용자 정보가 그대로 노출되기 때문
* api라우트를 사용할때 asd폴더안에 [...aa].js 를 만들면 api/asd 로 시작하는 모든 알수 없는 라우트를 잡아낸다
* 인증을 할 때 프론트엔드 부분에서 먼저 확인해야 하는것은 이페이지의 사용자가 인증되었는지 판단하는것
* 페이지 가드: 특정 페이지를 들어갔을때 세션이 없으면 다른페이지로 리다이렉트 하는것 프론트엔드, 서버 사이드 둘다 해야되는듯? -> 서버사이드에서하면 프론트에서 안해도되네
```
//서버사이드에서 페이지가드
export async function getServerSideProps(context) {
  const session = await getSession({req: context.req});

  if(!session) {
    return {
      redurect: {
        destination: '/auth',
        permanent: false // 이 리디렉션이 영구적으로 적용되는가
      }
    }
  }
}
```
* api라우트를 사용하면 인증된 사용자가 보낸 요청인지도 확인해야한다. 다른도구를 사용해서 api로 요청을 보낼 수 있기 때문이다
* 