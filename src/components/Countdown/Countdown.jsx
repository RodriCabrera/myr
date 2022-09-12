import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { calculateTimeLeft } from "../../utils/calculateTimeLeft";
import {
  Heading,
  Number,
  TimeBox,
  Timedown,
  TimerWrapper,
  Unit,
} from "./Countdown.styles";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {timeLeft.days > 0 ? (
        <Timedown>
          {/* <Heading>Ya llega!</Heading> */}
          {/* <Heading>12 . 11 . 2022 : 20.30hs.</Heading> */}
          <TimerWrapper>
            <TimeBox>
              <Number>{timeLeft.days}</Number>
              <Unit>Días</Unit>
            </TimeBox>
            <TimeBox>
              <Number>{timeLeft.hours}</Number>
              <Unit>Horas</Unit>
            </TimeBox>
            <TimeBox>
              <Number>{timeLeft.minutes}</Number>
              <Unit>Minutos</Unit>
            </TimeBox>
            <TimeBox>
              <Number>{timeLeft.seconds}</Number>
              <Unit>Segundos</Unit>
            </TimeBox>
          </TimerWrapper>
        </Timedown>
      ) : (
        ""
      )}
    </>
  );
};

export default Countdown;
