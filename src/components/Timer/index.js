import React from "react";
import TimerWrapper from "./timer.style";

const Timer = () => {
  return (
    <TimerWrapper>
      <label>타이머를 설정할 시간을 입력하세요</label>
      <input type="number"></input>
    </TimerWrapper>
  );
};

export default Timer;
