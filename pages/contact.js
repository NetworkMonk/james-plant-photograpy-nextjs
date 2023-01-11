import Head from "next/head";
import Container from "../components/Content/Container";
import {
  ContentPanel,
  ContentParagraph,
  ContentDiv,
} from "../components/Content/ContentPanel";
import Title from "../components/Content/Title";
import WhatsApp from "../components/Icons/WhatsApp";
import Instagram from "../components/Icons/Instagram";
import Envelope from "../components/Icons/Envelope";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>James Plant Photography - Contact</title>
        <meta
          name="description"
          content="Portrait photographer in London and Essex. Premium portraits to an excellent standard."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Contact</Title>

        <ContentPanel>
          <ContentDiv>
            <span className="flex sm:inline-flex flex-col gap-3 justify-items-stretch">
              <a
                href="mailto:jamesplant@gmail.com"
                className="text-lg border-l-2 border-white block my-2 py-4 px-6 transition-all duration-300 bg-white hover:text-black bg-opacity-5 hover:bg-opacity-90"
              >
                <span className="flex items-center">
                  <span>
                    <Envelope className="w-5 inline-block fill-current" />
                  </span>
                  <span className="mx-3">jamesplant@gmail.com</span>
                </span>
              </a>
              <a
                href="https://instagram.com/jamesplantphotography"
                className="text-lg border-l-2 border-white block my-2 py-4 px-6 transition-all duration-300 bg-white hover:text-black bg-opacity-5 hover:bg-opacity-90"
              >
                <span className="flex items-center">
                  <span>
                    <Instagram className="w-5 inline-block fill-current" />
                  </span>
                  <span className="mx-3">@jamesplantphotography</span>
                </span>
              </a>
              <a
                href="https://wa.me/+447545960983"
                className="text-lg border-l-2 border-white block my-2 py-4 px-6 transition-all duration-300 bg-white hover:text-black bg-opacity-5 hover:bg-opacity-90"
              >
                <span className="flex items-center">
                  <span>
                    <WhatsApp className="w-5 inline-block fill-current" />
                  </span>
                  <span className="mx-3">07545960983</span>
                </span>
              </a>
            </span>
          </ContentDiv>
        </ContentPanel>
      </Container>
    </div>
  );
}
