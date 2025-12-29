import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";

const LpHey = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-heycash-dark text-foreground flex flex-col">
      <Hero />
      <FeatureCards />
    </div>
  );
};

export default LpHey;
