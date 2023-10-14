import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncStores,
  selectAllStores,
  storyError,
  storyLoading,
} from "../../redux/features/storesSlice";

import StoryItem from "./StoryItem";
import Loader from "../loader/Loader";
import Empty from "../Empty";

function StoresList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const stores = useSelector(selectAllStores);
  const loading = useSelector(storyLoading);
  const error = useSelector(storyError);

  useEffect(() => {
    dispatch(fetchAsyncStores(page));
  }, [page, dispatch]);

  if (loading) return <Loader />;

  if (error) return <Empty message={"Failed To Fetch Stores Data."} />;

  return (
    <div
      className="grid 
      grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px] pb-[20px]
 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
    >
      {stores?.length > 0 &&
        stores?.map((s) => {
          return <StoryItem key={s.id} story={s} />;
        })}
    </div>
  );
}

export default StoresList;
