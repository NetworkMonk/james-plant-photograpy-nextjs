import Head from 'next/head'
import Container from "../components/Content/Container"
import { ContentPanel, ContentParagraph, ContentDiv } from "../components/Content/ContentPanel"
import Title from "../components/Content/Title"
import { default as GalleryDisplay } from '../components/Gallery/Gallery'

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>James Plant Photography - Gallery</title>
        <meta name="description" content="Portrait photographer in London and Essex. Premium portraits to an excellent standard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Gallery</Title>

        <ContentPanel>
          <ContentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum massa egestas porta elementum. Proin ipsum lectus, ultrices ut odio eget, lacinia sodales arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut est felis. Proin nec finibus ex, rutrum aliquet sem. Aliquam vulputate velit non tristique vehicula. Nam vulputate ligula ante.</ContentParagraph>
          <ContentDiv>
            <GalleryDisplay />
          </ContentDiv>
        </ContentPanel>

      </Container>
    </div>
  )
}
