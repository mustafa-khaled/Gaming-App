import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, alt, styles, onClick }) => {
  return (
    <LazyLoadImage
      onClick={onClick}
      src={src}
      alt={alt}
      className={`rounded-xl ${styles}`}
      effect="blur"
    />
  );
};

export default Img;
