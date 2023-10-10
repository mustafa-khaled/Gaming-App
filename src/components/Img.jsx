import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, alt, styles }) => {
  return <LazyLoadImage src={src} alt={alt} className={styles} effect="blur" />;
};

export default Img;
