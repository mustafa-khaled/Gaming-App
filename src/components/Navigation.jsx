function Navigation({ goToPrevPage, goToNextPage, pageNum, data }) {
  return (
    <div className="flex items-center gap-[10px] text-textColor">
      <button onClick={goToPrevPage} disabled={pageNum === 1}>
        <i
          className={`fa-solid fa-circle-chevron-left text-2xl
         ${pageNum === 1 ? "cursor-default" : "hover:text-purple"}
        `}
        ></i>
      </button>

      <button onClick={goToNextPage} disabled={data && data?.length === 0}>
        <i
          className={`fa-solid fa-circle-chevron-right text-2xl 
          ${
            data && data?.length === 0 ? "cursor-default" : "hover:text-purple"
          }`}
        ></i>
      </button>
    </div>
  );
}

export default Navigation;
