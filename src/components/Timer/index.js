import React, { useState } from "react";
import TimerWrapper from "./timer.style";

const Timer = () => {
  const [time, setTime] = useState(0);

  const onChange = (e) => {
    console.log("onChange");
    setTime(e.target.value);
  };

  const startTimer = () => {
    console.log("startTimer: " + time);
  };

  return (
    <TimerWrapper>
      <label>타이머를 설정할 시간을 입력하세요</label>
      <input type="number" onChange={onChange} value={time} />
      <button onClick={startTimer}>설정하기</button>
    </TimerWrapper>
  );
};

export default Timer;
