import Head from "next/head";
import Image from "next/image";
import Container from "../components/Content/Container";
import {
  ContentPanel,
  ContentParagraph,
  ContentDiv,
} from "../components/Content/ContentPanel";
import Title from "../components/Content/Title";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>James Plant Photography - About</title>
        <meta
          name="description"
          content="Portrait photographer in London and Essex. Premium portraits to an excellent standard."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>About</Title>

        <ContentPanel>
          <ContentParagraph>
            <span className="font-bold">Thank you,</span> for taking the time to
            look at my site.
          </ContentParagraph>
          <ContentParagraph>
            I am an experienced portrait photography with 5+ years of experience.
            I really take pride in the quality of my work and enjoy working with
            clients.
          </ContentParagraph>
          <ContentParagraph>
            I take either studio, or natural light portraits and can deliver
            professional business head shots, creative modelling or blogging
            photos.
          </ContentParagraph>
          <ContentParagraph>
            Please enjoy the small selection of content and contact me if you
            have any questions.
          </ContentParagraph>
          <ContentDiv>
            <div className="flex items-center">
              <div className="mx-auto max-w-sm">
                <Image
                  alt="James Plant"
                  src="/img/profile-photo.jpg"
                  width={100}
                  height={100}
                  className="rounded-xl shadow-lg w-16 h-20 lg:w-24 lg:h-28 object-cover"
                />
              </div>
              <div className="flex-grow p-3">
                <p className="font-bold text-xl mb-2">James Plant</p>
                <p className="font-semibold text-sm">
                  Premium Portrait Photographer
                </p>
                <p className="font-semibold text-sm">
                  <MapPinIcon className="w-4 h-4 -mt-1 inline-block" /> Essex,
                  UK
                </p>
              </div>
            </div>
          </ContentDiv>
        </ContentPanel>
      </Container>
    </div>
  );
}
