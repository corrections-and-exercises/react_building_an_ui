const AnimalCard = ({ type, animal, img, age }) => {
  return (
    <>
      <h3>Adopt a {type}!</h3>
      <div className="cardsContainer">
        <div className="card">
          <img src={img} alt={animal} />
          <h4>{animal}</h4>
          <p>
            {animal} is a loving companion who is {age} years old. Take it
            home!"
          </p>
        </div>
      </div>
    </>
  );
};

export default AnimalCard;
