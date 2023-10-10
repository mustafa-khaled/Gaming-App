import Img from "../Img";

function Game({ game }) {
  const { name, background_image } = game;

  return (
    <div>
      <Img src={background_image} alt={name} styles="w-full" />
      <h3>{name}</h3>
    </div>
  );
}

export default Game;
