import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch ";
import { stripHtmlTags } from "../../utils/helpers";

import noUser from "../../assets/noUser.png";
import Loader from "../loader/Loader";
import Img from "../Img";
import Empty from "../Empty";

function CreatorSingle() {
  const { id } = useParams();
  const { data, loading } = useFetch(`creators/${id}`);

  if (loading) return <Loader />;

  // If the id wrong
  if (!data?.id) return <Empty message="Creator Not Found." />;

  const { image, name, description, ratings, positions } = data || {};

  return (
    <div className="container mx-auto min-h-[100vh] px-[20px] pb-[20px] text-textColor">
      <div className="flex flex-col items-start  gap-[20px] md:flex-row">
        <div className="w-full md:w-[40%]">
          <Img src={image || noUser} alt={name} />
        </div>
        <div className="w-full md:w-[60%]">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-sm text-gray-400">
            {stripHtmlTags(description) || "No Description Available"}
          </p>

          <div className="mt-[10px] flex items-center gap-[5px]">
            <h4 className="mb-[5px] text-lg">Positions:</h4>

            {positions.map((p) => {
              return (
                <p key={p.id} className="text-sm text-gray-400">
                  {p.name}
                </p>
              );
            })}
          </div>

          <div>
            <h4 className="mb-[5px] text-xl">Ratings:</h4>
            <ul>
              {ratings.map((r) => {
                return (
                  <li key={r.id} className="text-sm">
                    {r.title}:{" "}
                    <span className="text-gray-400 underline">{r.percent}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorSingle;
