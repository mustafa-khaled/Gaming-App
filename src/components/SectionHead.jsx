function SectionHead({ title }) {
  return (
    <div>
      <h2 className="mb-[30px] text-3xl font-semibold uppercase">
        {title.split(" ")[0]}{" "}
        <span className="text-purple">{title.split(" ")[1]}</span>
      </h2>
    </div>
  );
}

export default SectionHead;
