import AnimalCard from "./AnimalCard";
import Form from "./Form";
import tom from "../assets/cat.jpg";
import olly from "../assets/cat2.jpg";
import oreo from "../assets/cat3.jpg";
import tabby from "../assets/dog.jpg";
import billy from "../assets/dog2.jpg";
import leila from "../assets/dog3.jpg";

const WreckshipShelterBonus = () => {
  const cats = ["Tom", "Olly", "Oreo"];
  const dogs = ["Tabby", "Billy", "Leila"];

  const age = () => Math.floor(Math.random() * (10 - 1) + 1);

  const picturesCats = [tom, olly, oreo];
  const picturesDogs = [tabby, billy, leila];

  return (
    <div className="block">
      <h2>Wreckship Shelter</h2>
      <p>
        In our beautiful shelter we have lots of animals with quirky qualities
        to them. Are you in search of a challenge? Here you can find the perfect
        animal for you!
      </p>
      {cats.map((cat, index) => (
        <AnimalCard
          type="Cat"
          animal={cat}
          img={picturesCats[index]}
          age={age()}
        />
      ))}
      {dogs.map((dog, index) => (
        <AnimalCard
          type="Dog"
          animal={dog}
          img={picturesDogs[index]}
          age={age()}
        />
      ))}
      <Form />
    </div>
  );
};

export default WreckshipShelterBonus;
