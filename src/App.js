import BgContainer from "./components/BgContainer";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Regalos from "./components/Regalos";
import RSVP from "./components/RSVP";
import Ubicacion from "./components/Ubicacion";

function App() {
  return (
    <>
      <BgContainer />
      <Navbar />
      <Header />
      <Countdown />
      <RSVP />
      <Ubicacion />
      <Regalos />
    </>
  );
}

export default App;
