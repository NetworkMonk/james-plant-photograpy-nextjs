import Head from "next/head";
import Container from "../components/Content/Container";
import { ContentPanel, ContentDiv } from "../components/Content/ContentPanel";

export default function Home() {
  const headlines = [
    "Portraits",
    "Maternity",
    "Family",
    "New Baby",
    "Fashion",
    "Product",
  ];

  return (
    <div>
      <Head>
        <title>James Plant Photography - Home</title>
        <meta
          name="description"
          content="Portrait photographer in London and Essex. Premium portraits to an excellent standard."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ContentPanel>
          {headlines.map((headline, headlineIndex) => {
            return (
              <ContentDiv
                className="text-2xl font-light text-right my-6 lg:my-12 uppercase"
                key={headlineIndex}
              >
                &bull; <span className="tracking-widest">{headline}</span>
              </ContentDiv>
            );
          })}
        </ContentPanel>
      </Container>
    </div>
  );
}
