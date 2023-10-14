import { Link } from "react-router-dom";
import Img from "../Img";

function StoryItem({ story }) {
  const { image_background, name, id } = story;

  return (
    <div>
      <Img
        src={image_background}
        alt={name}
        styles="md:w-[300px] w-[300px] object-cover h-[200px]"
      />
      <div>
        <Link
          className="text-lg uppercase text-textColor hover:text-gray-400"
          to={`/story/${id}`}
        >
          {name}
        </Link>
      </div>
    </div>
  );
}

export default StoryItem;
