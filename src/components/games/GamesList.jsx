import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allGames,
  gamesLoading,
  gamesError,
  fetchAsyncGames,
} from "../../redux/features/gamesSlice";

import GameItem from "./GameItem";
import Loader from "../loader/Loader";
import Empty from "../Empty";
import SectionHead from "../SectionHead";
import Navigation from "../Navigation";
import GridContainer from "../GridContainer";

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

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="mb-[30px] flex items-center justify-between">
        <SectionHead title="All Games" />
        <Navigation
          data={games}
          pageNum={page}
          goToPrevPage={handlePrevPage}
          goToNextPage={handleNextPage}
        />
      </div>

      <GridContainer>
        {games?.map((g) => {
          return <GameItem key={g?.id} game={g} />;
        })}
      </GridContainer>
    </div>
  );
}

export default GamesList;
