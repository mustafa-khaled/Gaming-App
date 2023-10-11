import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncGameDetails } from "../redux/utils/gameUtil";
import { selectGamesSingle, gamesLoading } from "../redux/gamesSlice";
import Loader from "../components/loader/Loader";

function GameSingle() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const game = useSelector(selectGamesSingle);
  const loading = useSelector(gamesLoading);
  useEffect(() => {
    dispatch(fetchAsyncGameDetails(id));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-[20px] text-textColor">GameSingle</div>
  );
}

export default GameSingle;
