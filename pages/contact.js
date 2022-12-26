import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Container from "../components/Content/Container"
import { ContentPanel, ContentParagraph } from "../components/Content/ContentPanel"
import Title from "../components/Content/Title"
import WhatsApp from '../components/Icons/WhatsApp'

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
          <ContentParagraph>
            <a href="mailto:jamesplant@gmail.com" className="text-lg">
              <EnvelopeIcon className="w-5 inline-block mr-3" />jamesplant@gmail.com
            </a>
          </ContentParagraph>
          <ContentParagraph>
            <a href="mailto:jamesplant@gmail.com" className="text-lg">
              <EnvelopeIcon className="w-5 inline-block mr-3" />@jamesplantphotography
            </a>
          </ContentParagraph>
          <ContentParagraph>
            <a href="https://wa.me/+447545960983" className="text-lg">
              <WhatsApp />
              <EnvelopeIcon className="w-5 inline-block mr-3" />07545960983
            </a>
          </ContentParagraph>
        </ContentPanel>

      </Container>
    </div>
  )
}
