export const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`${year}-04-08T21:00`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  // console.log("timeLeft", timeLeft);
  return timeLeft;
};
