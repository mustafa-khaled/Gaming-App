import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
