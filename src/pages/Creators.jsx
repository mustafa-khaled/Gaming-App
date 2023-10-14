import SectionHead from "../components/SectionHead";
import CreatorsList from "../components/creators/CreatorsList";

function Creators() {
  return (
    <div className="container mx-auto px-[20px]">
      <SectionHead title="All Creators" />
      <CreatorsList />
    </div>
  );
}

export default Creators;
