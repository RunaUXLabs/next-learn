import { LikeButtonCount, LikeButton } from '@/app/like-button';
import styles from "@/app/style.module.css";

// 대표타이틀 분리
function Title({ title }) {
  return <h1>{title ? title : '리액트 레이아웃 구성하기'}</h1>;
}
// props는 객체이므로 객체 분해를 사용할 수 있다
function Subtitle({ title }) {
  console.log(title);
  // return <h1>title</h1>;
  // 이렇게 쓰면 안되고 변수라고 알려줘야 함 {} 
  return <h3>{title}</h3>;
  /** js표현식 모두 사용가능
  1. 점표기법을 사용한 객체속성
    function Header(props) {
      return <h1>{props.title}</h1>;
    }
  2. 템플릿리터럴
    function Header({ title }) {
      return <h1>{`Cool ${title}`}</h1>;
    }
  3. 함수반환값
    function createTitle(title) {
      if (title) {
        return title;
      } else {
        return 'Default title';
      }
    }
    function Header({ title }) {
      return <h1>{createTitle(title)}</h1>;
    }
  4. 삼항연산자
    function Header({ title }) {
      return <h1>{title ? title : 'Default Title'}</h1>;
    }
   */
}

export default function HomePage() {
  // 리스트 반복을 위해 데이터 추가
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    // <div>
    <div className={styles.main}>
      <Title />
      <h2>헤더컴포넌트 삽입</h2>
      <Subtitle title="React" />
      일반 HTML 요소에는 해당 요소의 동작을 변경하는 정보를 전달하는 데 사용할 수 있는 속성attribute이 있다.
      React에는 구성 요소에 정보 조각을 속성attribute으로 전달할 수 있다.

      props를 통한 전달이 자유로워지니, 값에 할당할 문자열만 바꿔넘기면 된다.
      <Subtitle title="이것도 별개로 넘어가네" />
      <Subtitle title="title이 넘겨지니 값은 내맘대로!!" />

      <h2>반복문 표현하기</h2>
      <ul>
        {names.map((name) => (<li key={name}>{name}</li>))}
      </ul>
      고유성이 보장된 이름을 사용하여 업데이트 안전하게 연결하기

      <h2>이벤트 처리하기</h2>
      <LikeButton />
      클릭이벤트 처리

      <h2>훅(함수셋트)을 활용하여 상태관리해보기</h2>
      <LikeButtonCount />
      훅에 의해 카운터도 변경되며, 상태가 변경될 때마다 HomePage()에 대한 렌더링을 다시 한다.
    </div>
  );
}