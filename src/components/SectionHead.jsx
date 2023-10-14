function SectionHead({ title }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold uppercase text-textColor ">
        {title.split(" ")[0]}{" "}
        <span className="text-purple">{title.split(" ")[1]}</span>
      </h2>
    </div>
  );
}

export default SectionHead;
