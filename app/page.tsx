"use client";
import { SocialSidebar } from "@components/SocialSidebar";
import { FixedBanner } from "@components/FixedBanner";
import { ScrollSide } from "@components/ScrollSide";
import { Divisor } from "@components/base/Divisor";
import { Navbar } from "@components/Navbar";
import { Section } from "@components/Section";

import { About } from "@sections/About";
import { Contact } from "@sections/Contact";
import { Reviews } from "@sections/Reviews";
import { HomeSection } from "@sections/Home";
import { Experience } from "@sections/Experiences";
import { ITechIcon, Technologies } from "@sections/Technologies";

import { Container, Main } from "./styles";
import BrandLogo from "@public/logo-mock.png";

import {
  bio,
  name,
  roles,
  aboutText,
  contactInfo,
  techIconList,
  headerSectionsButtons,
  socialButtons,
  experiencesData,
  reviewsData,
} from "@constants/profileText";

export default function Home() {
  return (
    <Main>
      <Navbar
        brandName={name}
        brandImage={BrandLogo}
        sectionButtons={headerSectionsButtons}
      />
      <Container>
        <FixedBanner />
        <ScrollSide>
          <HomeSection name={name} roles={roles} bio={bio} />
          <Divisor />
          <Section title="About Me" description="My history" linked="about">
            <About text={aboutText} attributes={contactInfo} />
          </Section>
          <Divisor />
          <Section
            title="Technologies"
            description="Developing On"
            linked="technologies"
          >
            <Technologies iconsList={techIconList as ITechIcon[]} />
          </Section>
          <Divisor />
          <Section
            title="Experiences"
            description="Working with"
            linked="experiences"
          >
            <Experience experiencesList={experiencesData} />
          </Section>
          <Divisor />
          <Section
            title="Reviews"
            description="What co-workers say"
            linked="reviews"
          >
            <Reviews reviewsList={reviewsData} />
          </Section>
          <Divisor />
          {/* <Section title="Projects" description="Last works" linked="projects">
            <Text>teste</Text>
          </Section> */}
          <Divisor />
          <Section title="Contact me" description="Call me" linked="contact">
            <Contact infoList={contactInfo} />
          </Section>
        </ScrollSide>
        <SocialSidebar socialList={socialButtons} />
      </Container>
    </Main>
  );
}
