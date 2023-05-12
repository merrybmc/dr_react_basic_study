import React, { useState } from 'react';

export default function Counter({ count, setCount }) {
  const [num, setNum] = useState(0);
  const addNum = () => {
    // 클로저와 밀접하게 연관
    // 동기
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // 원하는대로 동작하기 위해서 화살표 함수
    // 비동기
    // setCount((count) => num + 1);
    // setCount((count) => num + 1);
    // setCount((count) => num + 1);

    setCount(count + 1);
    setNum(num + 1);
  };

  return (
    <div className='counter'>
      <span className='number'>{num}</span>
      <button
        className='button'
        onClick={() => {
          addNum();
        }}
      >
        Add +
      </button>
    </div>
  );
}
