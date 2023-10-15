import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto flex h-[80vh] items-center justify-center px-[10px] text-center text-textColor">
      <div>
        <h1 className="mb-[5p] text-3xl">Page Not Found.</h1>
        <Link
          to={"/"}
          replace
          className="text-lg text-gray-400 hover:text-purple"
        >
          Go To Home Page!
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
