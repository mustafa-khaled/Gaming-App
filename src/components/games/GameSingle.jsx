import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncGameDetails } from "../../redux/utils/gameUtil";
import { selectGamesSingle, gamesLoading } from "../../redux/gamesSlice";
import Loader from "../loader/Loader";
import Empty from "../Empty";

import Img from "../Img";
import { formatDate } from "../../utils/helpers";

function GameSingle() {
  const [showAllDesc, setShowAllDesc] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const game = useSelector(selectGamesSingle);
  const loading = useSelector(gamesLoading);
  useEffect(() => {
    dispatch(fetchAsyncGameDetails(id));
  }, [dispatch, id]);

  const {
    background_image,
    description_raw,
    publishers,
    name,
    genres,
    released,
    developers,
  } = game;

  if (loading) return <Loader />;

  if (!id) return <Empty message={"Failed To Fetch Game Data."} />;

  console.log(game);

  return (
    <div className="container mx-auto flex min-h-[120vh] flex-col items-start gap-[20px] px-[20px] pb-[20px] md:flex-row">
      <div className="w-full md:w-[50%]">
        <Img
          src={background_image}
          alt={name}
          styles="w-full rounded-xl object-cover border-[5px] border-purple"
        />
      </div>

      <div className="flex w-full flex-col  gap-[10px] text-sm text-gray-400 md:w-[50%]">
        <h1 className="text-2xl text-textColor">{name}</h1>

        <p>
          {showAllDesc
            ? description_raw
            : description_raw?.slice(0, description_raw?.length / 2)}{" "}
          <span
            className="cursor-pointer text-textColor underline"
            onClick={() => setShowAllDesc((p) => !p)}
          >
            {showAllDesc ? " See less!" : " See more!"}
          </span>
        </p>

        {/* Released */}
        <div className="flex items-center gap-[10px] ">
          <p className="text-textColor">
            <i className="fa-regular fa-clock"></i> Released Date:
          </p>
          <p>{formatDate(released)}</p>
        </div>
        {/* Developers */}
        <div className="flex items-center gap-[10px] ">
          <p className="text-textColor">
            <i className="fa-solid fa-gears"></i> Developers:
          </p>
          <p>
            {developers?.map((dev) => (
              <span key={dev.id} className="mr-[5px]">
                {dev.name},
              </span>
            ))}
          </p>
        </div>

        {/* Genres */}
        <div className="flex items-center gap-[10px] ">
          <p className="text-textColor">
            <i className="fa-solid fa-dice-d6"></i> Genres:
          </p>
          <p>
            {genres?.map((g) => (
              <span key={g.id} className="mr-[5px] underline">
                {g.name},
              </span>
            ))}
          </p>
        </div>

        {/* publishers */}
        <div className="flex items-center gap-[10px] ">
          <p className="text-textColor">
            <i className="fa-solid fa-globe"></i> Publishers:
          </p>
          <p>
            {publishers?.map((p) => (
              <span key={p.id} className="mr-[5px]">
                {p.name},
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameSingle;