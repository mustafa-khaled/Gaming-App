import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch ";
import { stripHtmlTags } from "../../utils/helpers";

import Loader from "../loader/Loader";
import Img from "../Img";

function StorySingle() {
  const { id } = useParams();
  const { data, loading } = useFetch(`stores/${id}`);

  if (loading) return <Loader />;

  const { image_background, name, domain, description } = data || {};

  return (
    <div className="container mx-auto min-h-[80vh] px-[20px] pb-[20px] text-textColor">
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <div className="w-full md:w-[50%]">
          <Img src={image_background} alt={name} styles="w-full object-cover" />
        </div>

        <div className="w-full md:w-[50%]">
          <h3 className="text-2xl">{name}</h3>
          <p className="my-[5px] text-sm text-gray-400">
            {stripHtmlTags(description) || "No Description Available"}
          </p>
          <Link
            target="_blank"
            to={`https://${domain}`}
            className="text-xl text-purple hover:text-gray-400"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StorySingle;
