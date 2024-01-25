"use client";
import { SocialSidebar } from "@components/SocialSidebar";
import { FixedBanner } from "@components/FixedBanner";
import { ScrollSide } from "@components/ScrollSide";
import { Divider } from "@components/base/Divider";
import { Navbar } from "@components/Navbar";
import { Section } from "@components/Section";

import { About } from "@sections/About";
import { Contact } from "@sections/Contact";
import { HomeSection } from "@sections/Home";
import { Experience } from "@sections/Experiences";
import { Technologies } from "@sections/Technologies";

import { Container, Main } from "./styles";
import { TLocaleTypes, getDictionary } from "./dictionaries";

import { socialButtons } from "@src/components/SocialSidebar/constants";
import { techSvgList } from "@src/sections/Technologies/constants";

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
          <Divider />
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
          <Divider />
          <Section
            title={dict.MAIN.TECHNOLOGIES.TITLE}
            description={dict.MAIN.TECHNOLOGIES.DESCRIPTION}
            linked="technologies"
          >
            <Technologies svgList={techSvgList} />
          </Section>
          <Divider />
          <Section
            title={dict.MAIN.EXPERIENCES.TITLE}
            description={dict.MAIN.EXPERIENCES.DESCRIPTION}
            linked="experiences"
          >
            <Experience experiencesList={dict.MAIN.EXPERIENCES.CAROUSEL} />
          </Section>
          <Divider />
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
