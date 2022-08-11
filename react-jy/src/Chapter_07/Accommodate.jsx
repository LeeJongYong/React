import React, {useState, useEffect} from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props){
    // isFull state의 기본값을 false로 초기화
    // setIfFull함수를 통해 값 변경
    const [isFull, setIsFull] = useState(false);
    // 컴포넌트 사용
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 컴포넌트 업데이트 시 마다 실행
    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 의존 배열인 count의 값이 변할 때 실행
    useEffect(() => {
        // setIsFull 함수 실행 조건
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{` 총 ${count}명 수용했습니다.`}</p>
            {/* 이벤트 실행 시 컴포넌트 실행 */}
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            
            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;