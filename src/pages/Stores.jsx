import SectionHead from "../components/SectionHead";
import StoresList from "../components/stores/StoresList";

function Stores() {
  return (
    <div className="container mx-auto px-[20px]">
      <SectionHead title="All Stores" />
      <StoresList />
    </div>
  );
}

export default Stores;
