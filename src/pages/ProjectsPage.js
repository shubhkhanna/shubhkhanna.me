import { Helmet } from "react-helmet-async";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - shubhkhanna.in</title>
        <meta
          name="description"
          content="Here are some of my side projects. I love coding and building stuff with tools like React, React Native, Node.js, Express, MongoDB, and more."
        />
        <link rel="canonical" href="/projects" />
      </Helmet>
    </>
  );
};

export default ProjectsPage;
