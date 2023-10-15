import { useEffect } from "react";
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
import SectionHead from "../SectionHead";
import GridContainer from "../GridContainer";

function StoresList() {
  const dispatch = useDispatch();

  const stores = useSelector(selectAllStores);
  const loading = useSelector(storyLoading);
  const error = useSelector(storyError);

  useEffect(() => {
    dispatch(fetchAsyncStores());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Empty message={"Failed To Fetch Stores Data."} />;

  return (
    <div>
      <div className="mb-[30px]">
        <SectionHead title="All Stores" />
      </div>

      <GridContainer>
        {stores?.length > 0 &&
          stores?.map((s) => {
            return <StoryItem key={s.id} story={s} />;
          })}
      </GridContainer>
    </div>
  );
}

export default StoresList;
