import Dresscode from "./components/Dresscode/Dresscode";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Regalos from "./components/Regalos";
import RSVP from "./components/RSVP";
import Ubicacion from "./components/Ubicacion";

function App() {
  return (
    <>
      <Navbar />
      {/* <BgContainer /> */}
      <Header />
      <Ubicacion />
      <RSVP />
      <Dresscode />
      <Regalos />
    </>
  );
}

export default App;
