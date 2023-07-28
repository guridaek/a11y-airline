import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label>성인</label>
          <div className="helpIcon" onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
            ?{isTooltipVisible && <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>}
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label="성인 탑승자 한 명 줄이기"
          disabled={count <= 0}
        >
          -
        </button>
        <input type="text" role="spinbutton" readOnly className="spinButtonInput" value={count} />
        <div className="hidden" aria-atomic="true" aria-live="assertive" aria-relevant="additions">
          <p>성인 탑승자 {count}명으로 변경됨</p>
        </div>
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한 명 늘이기"
          disabled={count >= 3}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
