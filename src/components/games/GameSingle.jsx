import { useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/helpers";
import { useFetch } from "../../hooks/useFetch ";

import Loader from "../loader/Loader";
import Empty from "../Empty";
import Img from "../Img";
import SameSeries from "./SameSeries";
import DevelopmentTeam from "./DevelopmentTeam";

function GameSingle() {
  const { id } = useParams();
  // Get game Details using Custom Hook
  const { data, loading } = useFetch(`games/${id}`);

  // Get game Screenshots data using Custom Hook
  const { data: screenshots, loading: screenshotsLoading } = useFetch(
    `games/${id}/screenshots`,
  );

  // Get game game series data using Custom Hook
  const { data: sameSeries, loading: sameSeriesLoading } = useFetch(
    `games/${id}/game-series`,
  );

  // Get game game development team aata using Custom Hook
  const { data: developmentTeam, loading: developmentTeamLoading } = useFetch(
    `games/${id}/development-team`,
  );

  // State To Limit Description well show on screen
  const [showAllDesc, setShowAllDesc] = useState(false);

  // Display specific Image onClick
  const [mainImage, setMainImage] = useState(null);

  if (
    loading ||
    screenshotsLoading ||
    sameSeriesLoading ||
    developmentTeamLoading
  )
    return <Loader />;

  if (!id) return <Empty message={"Failed To Fetch Game Data."} />;

  const {
    background_image,
    description_raw,
    publishers,
    name,
    genres,
    released,
    developers,
  } = data || {};

  const displayImage = mainImage || background_image;

  return data?.id ? (
    <div className="container mx-auto min-h-[100vh] px-[20px] pb-[20px]">
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <div className="relative w-full md:w-[50%]">
          <Img src={displayImage} alt={name} styles="w-full object-cover" />

          {/* IF the main image not selected give option to do that */}
          {displayImage !== background_image && (
            <div
              className="absolute right-[5px] top-[5px] cursor-pointer"
              onClick={() => setMainImage(background_image)}
            >
              <Img
                src={background_image}
                alt={name}
                styles=" w-[100px] object-cover border-[2px] border-purple"
              />
            </div>
          )}

          <h2 className="my-[10px] text-textColor">Screenshots:</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-[20px]">
            {screenshots?.results?.length > 0 &&
              screenshots?.results?.map((s) => {
                return (
                  <Img
                    src={s.image}
                    alt={name}
                    key={s.id}
                    styles="w-full h-[70px] rounded-xl object-cover border-[2px] border-purple cursor-pointer"
                    onClick={() => setMainImage(s.image)}
                  />
                );
              })}
          </div>
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
      <SameSeries data={sameSeries?.results} />
      <DevelopmentTeam data={developmentTeam?.results} />
    </div>
  ) : (
    <Empty message="Game Not Found" />
  );
}

export default GameSingle;
