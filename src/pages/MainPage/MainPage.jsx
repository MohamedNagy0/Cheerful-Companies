import AnswersSection from "../../components/AnswersSection/AnswersSection";
import BenefitImage from "../../components/BenefitsSection/BenefitImage";
import BenefitsHumanImage from "../../components/BenefitsSection/BenefitsHumanImage";
import BenefitsList from "../../components/BenefitsSection/BenefitsList";
import BenefitsOfUSA from "../../components/BenefitsSection/BenefitsOfUSA";
import EntityType from "../../components/EntityTypeSection/EntityType";
import Header from "../../components/HeaderSection/Header";
import HeaderCaption from "../../components/HeaderSection/HeaderCaption";
import MapSection from "../../components/MapSection/MapSection";
import PackageSection from "../../components/PackageSection/PackageSection";
import UsVsThemSection from "../../components/UsVsThemSection/UsVsThemSection";

function MainPage() {
  return (
    <>
      {/* Header */}
      <Header />
      <HeaderCaption />

      <main>
        {/* Benefits Section */}
        <section id="benefitsSection">
          <div className="wrapper grid grid-cols-12">
            <BenefitsList />
            <BenefitImage />
          </div>
        </section>
        {/* Package Section  */}
        <PackageSection />
        {/* 2th Benefits Section*/}
        <section data-aos="fade-up" data-aos-duration="1500">
          <div className="wrapper grid grid-cols-12 my-16 gap-y-12">
            <BenefitsOfUSA />
            <BenefitsHumanImage />
          </div>
        </section>
        {/* Us Vs Them Section */}
        <UsVsThemSection />

        {/* Answers Section */}
        <AnswersSection />

        {/* Map Section */}
        <MapSection />

        {/* EntityType Section */}
        <EntityType />
      </main>
    </>
  );
}

export default MainPage;
