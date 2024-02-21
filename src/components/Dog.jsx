import tabby from "../assets/dog.jpg";
import billy from "../assets/dog2.jpg";
import leila from "../assets/dog3.jpg";

const Dog = () => {
  const dogs = ["Tabby", "Billy", "Leila"];
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);

  return (
    <section className="animalContainer">
      <h3>Adopt a Dog!</h3>
      <div className="cardsContainer">
        <div className="card">
          <img src={tabby} alt={dogs[0]} />
          <h4>{dogs[0]}</h4>
          <p>
            {dogs[0]} is the perfect combination between sweet and protective.
            This {age()} year old dog will give you loads of love, but it will
            also protect your house from the mailman like nobody's business, so
            you will never receive unwanted mail again (or any other kind). She
            enjoys the ocasional fetch ball game, but in general she would
            rather eat your shoes or dig a hole where you just planted that new
            Gardenia. Take her with you back home!
          </p>
        </div>
        <div className="card">
          <img src={billy} alt={dogs[1]} />
          <h4>{dogs[1]}</h4>
          <p>
            {dogs[1]} is a loving companion who is {age()} years old. Take it
            home!"
          </p>
        </div>
        <div className="card">
          <img src={leila} alt={dogs[2]} />
          <h4>{dogs[2]}</h4>
          <p>
            {dogs[2]} is a loving companion who is {age()} years old. Take it
            home!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dog;
