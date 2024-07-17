'use client';
// 클라이언트 구성 요소를 만들려면 React가 클라이언트에서 구성 요소를 렌더링하도록 지시하도록 위 구문을 작성해야 한다.

import { useState } from 'react';

// 카운트가 되는 좋아요버튼 분리
export function LikeButtonCount() {
  // 훅을 활용하여 상호작용 구현, 배열분해 사용
  // const [state상태변수, 업데이트값에대한 함수] = React.useState();
  const [likes, setLikes] = useState(0); // 초깃값 반영
  /**
  첫 번째 함수 매개변수로 컴포넌트에 전달되는 props와 달리, state는 컴포넌트 내에서 초기화되고 저장됨. 자식 컴포넌트에 props로 state 정보를 전달할 수 있지만, state를 업데이트하는 로직은 state가 처음 생성된 컴포넌트 내에 유지해야한다.
  */

  function handleClick02() {
    // 컴포넌트 에서 상태 업데이터 함수를 호출
    setLikes(likes + 1);
  }

  return <button onClick={handleClick02}>Like ({likes})</button>;
}

// 기본 이벤트 버튼 분리
export function LikeButton() {
  function handleClick01() {
    console.log('클릭했슈');
  }

  return <button onClick={handleClick01}>Like(콘솔확인)</button>;
}