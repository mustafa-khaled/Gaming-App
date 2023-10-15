import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

import Img from "../Img";

function GameItem({ game }) {
  const { name, background_image, id, released, genres } = game;

  return (
    <div className="text-sm text-gray-400">
      <div>
        <Img
          src={background_image}
          alt={name}
          styles=" w-full object-cover h-[200px]"
        />
      </div>
      <Link
        className="text-lg uppercase text-textColor hover:text-gray-400"
        to={`/games/${id}`}
      >
        {name}
      </Link>
      <div className="flex items-center gap-[5px]">
        <p>Release date: </p>
        <p>{formatDate(released)}</p>
      </div>
      <div className="flex flex-wrap items-center">
        {genres.map((g) => {
          return (
            <span key={g.id} className="mr-[5px] block underline">
              {g.name}
            </span>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default GameItem;
