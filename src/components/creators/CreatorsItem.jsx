import { Link } from "react-router-dom";
import noUser from "../../assets/noUser.png";

function CreatorsItem({ data }) {
  const { name, image_background, image, id } = data || {};

  return (
    <div className=" rounded-xl bg-secondary pb-[10px] text-center text-textColor">
      {/* Background Image */}
      <div
        className="relative h-[100px] rounded-xl bg-cover opacity-[0.8]"
        style={{ backgroundImage: `url(${image_background})` }}
      ></div>
      <div className="relative top-[-30px]">
        <img
          src={image || noUser}
          alt={name}
          className="mx-auto h-[100px] w-[100px] rounded-full object-cover"
        />
      </div>
      <Link to={`/creator/${id}`} className="hover:text-gray-400">
        {name}
      </Link>
    </div>
  );
}

export default CreatorsItem;
