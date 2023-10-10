import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGames } from "../../redux/utils/gameUtil";
import {
  selectAllGames,
  selectError,
  selectLoading,
} from "../../redux/gamesSlice";
import Game from "./Game";

function GamesList() {
  const [page, setPage] = useState(3);
  const dispatch = useDispatch();

  const games = useSelector(selectAllGames);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page, dispatch]);

  const pageHandler = (pageValue) => setPage(pageValue);

  if (loading) return <div>Loading</div>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[10px]">
      {games?.map((g) => {
        return <Game key={g?.id} game={g} />;
      })}
    </div>
  );
}

export default GamesList;
