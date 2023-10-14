import SectionHead from "../components/SectionHead";
import GamesList from "../components/games/GamesList";

function Games() {
  return (
    <div className="container mx-auto px-[20px]">
      <SectionHead title="All Games" />
      <GamesList />
    </div>
  );
}

export default Games;
