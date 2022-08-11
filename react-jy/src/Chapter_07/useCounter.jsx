import React, {useState} from 'react';

function useCounter(initialValue){
    // 입력받은 param을 기본값으로 선언
    const [count, setCount] = useState(initialValue);

    // 증가 함수 선언
    const increaseCount = () => setCount((count) => count + 1);
    // 감소 함수 선언
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    // 변수, 함수를 리턴
    return [count, increaseCount, decreaseCount];
}

export default useCounter;