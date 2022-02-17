import BgContainer from "./components/BgContainer";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import Regalos from "./components/Regalos";
import RSVP from "./components/RSVP";
import Ubicacion from "./components/Ubicacion";

function App() {
  return (
    <>
      <BgContainer />
      <Header />
      <Countdown />
      <RSVP />
      <Ubicacion />
      <Regalos />
    </>
  );
}

export default App;
