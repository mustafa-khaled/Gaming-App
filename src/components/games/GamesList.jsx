import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGames } from "../../redux/utils/gameUtil";
import {
  gamesError,
  gamesLoading,
  selectAllGames,
} from "../../redux/gamesSlice";
import GameItem from "./GameItem";
import Loader from "../loader/Loader";
import Empty from "../Empty";

function GamesList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const games = useSelector(selectAllGames);
  const loading = useSelector(gamesLoading);
  const error = useSelector(gamesError);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page, dispatch]);

  const pageHandler = (pageValue) => setPage(pageValue);

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
