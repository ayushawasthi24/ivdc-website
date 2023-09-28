import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, projects } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Events from "../components/events";
import Team from "../components/team";

const Home = () => {
  return (
    <>
      <Head>
        <title>IVDC Club</title>
        <meta
          name="description"
          content="Intelligent Vehicle Design and Control Club"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Introduction" title="About IVDC Club">
        Intelligent Vehicle Design and Control (IVDC) club is a group of
        autonomous vehicle enthusiasts of IIT Indore. We mainly work on the
        design, development, and research of intelligent vehicles and
        participate in various national and international competitions. This
        club was formerly known as Team Engines and Demons, in which we used to
        design, develop and manufacture entirely new off-road race vehicles from
        scratch. We have expanded our domain to include intelligent vehicles,
        and the IVDC Club has been functional since April 2022.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <div id="Projects">
        <SectionTitle
          pretitle="Projects"
          title="Here's what we've created so far"
          id="Projects"
        ></SectionTitle>
        <Testimonials data={projects} />
      </div>
      <div id="Events">
        <SectionTitle
          id="Events"
          pretitle="Events"
          title="Recent Events"
        ></SectionTitle>
        <Events />
      </div>
      <div id="Team">
        <SectionTitle id="Team" pretitle="Team" title="Our Team"></SectionTitle>
        <Team />
      </div>
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
