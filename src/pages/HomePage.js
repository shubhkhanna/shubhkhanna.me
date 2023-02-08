import { Helmet } from "react-helmet-async";
import CTASection from "../components/home/CTASection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillSection from "../components/home/SkillSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Shubh Khanna - Full Stack Software Engineer</title>
        <meta
          name="description"
          content="I'm a full stack software engineer with a passion for building web applications and cross-platform mobile apps."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <HeroSection />
      <div className="mt-20 space-y-32">
        <ProjectsSection />
        <SkillSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;
