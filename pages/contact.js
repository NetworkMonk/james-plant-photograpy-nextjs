import Head from 'next/head'
import Container from "../components/Content/Container"
import { ContentPanel, ContentParagraph } from "../components/Content/ContentPanel"
import Title from "../components/Content/Title"

export default function Contact() {
  return (
    <div>
      <Head>
        <title>James Plant Photography - Contact</title>
        <meta name="description" content="Portrait photographer in London and Essex. Premium portraits to an excellent standard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Contact</Title>

        <ContentPanel>
          <ContentParagraph>You can contact me with any of the below links and I&apos;m happy to discuss any potential requirement you might have.</ContentParagraph>
        </ContentPanel>

      </Container>
    </div>
  )
}
