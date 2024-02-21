import "./styles.css";
import Instructions from "./instructions/Instructions";
import WreckshipShelter from "./components/WreckshipShelter";
import WreckshipShelterBonus from "./components/WreckshipShelterBonus";

export default function App() {
  return (
    <>
      <Instructions />
      {/* <WreckshipShelter /> */}
      {/* BONUS LEVEL  */}
      <WreckshipShelterBonus />
    </>
  );
}
