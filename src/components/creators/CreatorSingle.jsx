import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch ";
import { stripHtmlTags } from "../../utils/helpers";

import noUser from "../../assets/noUser.png";
import Loader from "../loader/Loader";
import Img from "../Img";

function CreatorSingle() {
  const { id } = useParams();
  const { data, loading } = useFetch(`creators/${id}`);

  if (loading) return <Loader />;
  const { image, name, description } = data || {};

  return (
    <div className="container mx-auto min-h-[100vh] px-[20px] pb-[20px] text-textColor">
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <div className="w-full md:w-[50%]">
          <Img src={image || noUser} alt={name} />
        </div>
        <div className="w-full md:w-[50%]">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-sm text-gray-400">
            {stripHtmlTags(description) || "No Description Available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreatorSingle;
