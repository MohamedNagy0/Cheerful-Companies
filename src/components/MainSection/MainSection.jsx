import MapSection from "../MapSection/MapSection";
import PackageSection from "../PackageSection/PackageSection";
import UsVsThemSection from "../UsVsThemSection/UsVsThemSection";
import AnswersSection from "../AnswersSection/AnswersSection";
import BenefitsSection1th from "../BenefitsSection/BenefitsSection1th";
import BenefitsSection2th from "../BenefitsSection/BenefitsSection2th";
import EntityTypeSection from "../EntityTypeSection/EntityTypeSection";
function MainSection() {
  return (
    <main>
      {/* Benefits Section */}
      <BenefitsSection1th />

      {/* 2th Benefits Section*/}
      <BenefitsSection2th />

      {/* Package Section  */}
      <PackageSection />

      {/* Us Vs Them Section */}
      <UsVsThemSection />

      {/* Answers Section */}
      <AnswersSection />

      {/* Map Section */}
      <MapSection />

      {/* EntityType Section */}
      <EntityTypeSection />
    </main>
  );
}

export default MainSection;
