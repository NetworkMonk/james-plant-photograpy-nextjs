import Head from "next/head";
import Container from "../components/Content/Container";
import { ContentPanel, ContentDiv } from "../components/Content/ContentPanel";
import Title from "../components/Content/Title";
import { default as GalleryDisplay } from "../components/Gallery/Gallery";

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>James Plant Photography - Gallery</title>
        <meta
          name="description"
          content="Portrait photographer in London and Essex. Premium portraits to an excellent standard."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Gallery</Title>

        <ContentPanel>
          <ContentDiv>
            <GalleryDisplay />
          </ContentDiv>
        </ContentPanel>
      </Container>
    </div>
  );
}
