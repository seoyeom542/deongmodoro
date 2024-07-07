import React from "react";
import TimerWrapper from "./timer.style";

const Timer = () => {
  return (
    <TimerWrapper>
      <label>타이머를 설정할 시간을 입력하세요</label>
      <input type="number"></input>
      <button>설정하기</button>
    </TimerWrapper>
  );
};

export default Timer;
