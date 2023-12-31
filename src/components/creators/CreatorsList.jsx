import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import Empty from "../Empty";
import {
  creatorsError,
  creatorsLoading,
  fetchAsyncCreators,
  selectAllCreators,
} from "../../redux/features/creatorsSlice";
import CreatorsItem from "./CreatorsItem";
import SectionHead from "../SectionHead";
import Navigation from "../Navigation";
import GridContainer from "../GridContainer";

function CreatorsList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const creators = useSelector(selectAllCreators);
  const loading = useSelector(creatorsLoading);
  const error = useSelector(creatorsError);

  useEffect(() => {
    dispatch(fetchAsyncCreators(page));
  }, [page, dispatch]);

  const handleNextPage = () => {
    setPage((p) => p + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  };

  if (loading) return <Loader />;
  if (error) return <Empty message={"Failed To Fetch Creators Data."} />;

  return (
    <div>
      <div className="mb-[30px] flex items-center justify-between">
        <SectionHead title="All Creators" />
        <Navigation
          data={creators}
          pageNum={page}
          goToPrevPage={handlePrevPage}
          goToNextPage={handleNextPage}
        />
      </div>

      <GridContainer>
        {creators?.length > 0 &&
          creators.map((el) => {
            return <CreatorsItem key={el.id} data={el} />;
          })}
      </GridContainer>
    </div>
  );
}

export default CreatorsList;
