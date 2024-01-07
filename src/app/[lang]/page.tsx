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
import { TLocaleTypes, getDictionary } from "./dictionaries";

import {
  techIconList,
  socialButtons,
  experiencesData,
  reviewsData,
} from "@constants/profileText";

export default function Home({
  params: { lang },
}: {
  params: { lang: TLocaleTypes };
}) {
  const dict = getDictionary(lang);
  return (
    <Main>
      <Navbar
        brandName={dict.MAIN.HEADER.NAME}
        brandImage={"/logo.png"}
        sectionButtons={dict.MAIN.NAVBAR}
      />
      <Container>
        <FixedBanner />
        <ScrollSide>
          <HomeSection
            name={dict.MAIN.HEADER.NAME}
            roles={dict.MAIN.HEADER.ROLES}
            bio={dict.MAIN.HEADER.SHORT_BIO}
          />
          <Divisor />
          <Section
            title={dict.MAIN.ABOUT_ME.TITLE}
            description={dict.MAIN.ABOUT_ME.DESCRIPTION}
            linked="about"
          >
            <About
              text={dict.MAIN.ABOUT_ME.TEXT}
              attributes={dict.MAIN.ABOUT_ME.INFOS}
            />
          </Section>
          <Divisor />
          <Section
            title={dict.MAIN.TECHNOLOGIES.TITLE}
            description={dict.MAIN.TECHNOLOGIES.DESCRIPTION}
            linked="technologies"
          >
            <Technologies iconsList={techIconList as ITechIcon[]} />
          </Section>
          <Divisor />
          <Section
            title={dict.MAIN.EXPERIENCES.TITLE}
            description={dict.MAIN.EXPERIENCES.DESCRIPTION}
            linked="experiences"
          >
            <Experience experiencesList={experiencesData} />
          </Section>
          <Divisor />
          <Section
            title={dict.MAIN.REVIEWS.TITLE}
            description={dict.MAIN.REVIEWS.DESCRIPTION}
            linked="reviews"
          >
            <Reviews reviewsList={reviewsData} />
          </Section>
          <Divisor />
          {/* <Section title="Projects" description="Last works" linked="projects">
            <Text>teste</Text>
          </Section> */}
          <Divisor />
          <Section
            title={dict.MAIN.CONTACT_ME.TITLE}
            description={dict.MAIN.CONTACT_ME.DESCRIPTION}
            linked="contact"
          >
            <Contact
              infoList={dict.MAIN.ABOUT_ME.INFOS}
              infoTitle={dict.MAIN.CONTACT_ME.INFOS}
            />
          </Section>
        </ScrollSide>
        <SocialSidebar socialList={socialButtons} />
      </Container>
    </Main>
  );
}
