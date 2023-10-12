import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allGames,
  gamesLoading,
  gamesError,
  fetchAsyncGames,
} from "../../redux/features/games/gamesSlice";

import GameItem from "./GameItem";
import Loader from "../loader/Loader";
import Empty from "../Empty";

function GamesList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const games = useSelector(allGames);
  const loading = useSelector(gamesLoading);
  const error = useSelector(gamesError);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page, dispatch]);

  if (loading) return <Loader />;

  if (error) return <Empty message={"Failed To Fetch Games Data."} />;

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px]
    pb-[20px] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
    >
      {games?.map((g) => {
        return <GameItem key={g?.id} game={g} />;
      })}
    </div>
  );
}

export default GamesList;
