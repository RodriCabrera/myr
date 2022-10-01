import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../utils/calculateTimeLeft";
import { Text } from "../common.styles";
import {
  Heading,
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
          <Heading>¡Ya llega!</Heading>
          {/* <Heading>12 . 11 . 2022 : 20.30hs.</Heading> */}
          <TimerWrapper>
            <TimeBox>
              <Text size="3rem">{timeLeft.days}</Text>
              <Unit>Días</Unit>
            </TimeBox>
            <TimeBox>
              <Text size="3rem">{timeLeft.hours}</Text>
              <Unit>Horas</Unit>
            </TimeBox>
            <TimeBox>
              <Text size="3rem">{timeLeft.minutes}</Text>
              <Unit>Minutos</Unit>
            </TimeBox>
            <TimeBox>
              <Text size="3rem">{timeLeft.seconds}</Text>
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
