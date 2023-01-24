import Head from "next/head";
import Container from "../components/Content/Container";
import {
  ContentPanel,
  ContentParagraph,
} from "../components/Content/ContentPanel";
import Title from "../components/Content/Title";

export default function Home() {
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
        <Title>Home</Title>

        <ContentPanel>
          <ContentParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum massa egestas porta elementum. Proin ipsum lectus, ultrices
            ut odio eget, lacinia sodales arcu. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut
            est felis. Proin nec finibus ex, rutrum aliquet sem. Aliquam
            vulputate velit non tristique vehicula. Nam vulputate ligula ante.
          </ContentParagraph>
          <ContentParagraph>
            In non justo ac odio gravida aliquet. Nullam sed neque non augue
            tristique posuere at ac enim. Nam quis tellus vel purus congue
            faucibus in vel dui. Curabitur sed lobortis sapien, ac placerat
            elit. Donec varius nisl a neque dictum volutpat. Aenean dapibus a
            urna vitae finibus. Praesent ac urna ante. Nullam pellentesque quam
            et nunc posuere, laoreet porta nunc bibendum. In et metus libero.
            Nunc ultricies nec erat sed aliquam. Phasellus ornare hendrerit leo,
            vitae laoreet arcu congue quis. Ut in diam facilisis, vehicula nisl
            sit amet, pellentesque enim. Aliquam sit amet commodo lorem,
            volutpat consectetur orci. Mauris auctor egestas nisl, ultricies
            lacinia justo feugiat vitae. Maecenas placerat justo velit, luctus
            viverra nisl ultricies non. Quisque in tellus at dolor ullamcorper
            eleifend.
          </ContentParagraph>
          <ContentParagraph>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras imperdiet ullamcorper lacus id
            consectetur. Fusce id velit eu magna dapibus gravida in ut ex.
            Suspendisse potenti. Ut elit velit, vulputate eu bibendum in,
            vehicula vitae erat. Maecenas ac quam convallis magna sollicitudin
            elementum. Donec interdum ex ut augue posuere lobortis. Mauris sed
            augue sed massa interdum mattis. Quisque mollis placerat erat a
            volutpat. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Etiam venenatis molestie nisl.
            Vivamus iaculis sed felis ut vestibulum. Cras volutpat tristique
            leo, eget rhoncus nisl feugiat in.
          </ContentParagraph>
          <ContentParagraph>
            Aliquam congue placerat erat non imperdiet. Cras pulvinar at libero
            vitae venenatis. Aliquam sollicitudin bibendum interdum. Aenean
            sapien lectus, varius sit amet placerat eget, suscipit in metus.
            Aenean velit dui, faucibus sit amet eros eget, accumsan euismod
            mauris. Duis purus est, sagittis vitae ante eget, imperdiet
            facilisis sapien. Sed accumsan at leo ut scelerisque. Nunc ac nisl
            magna. Vestibulum a nulla metus. Praesent scelerisque sodales leo
            quis egestas. Praesent posuere nec odio in sollicitudin. Proin at
            ante nec ex feugiat maximus. Donec non mi gravida dui cursus laoreet
            ac et lorem. Curabitur sollicitudin mollis elit a imperdiet. Etiam
            sagittis, urna id euismod laoreet, nulla velit sodales ex, sed
            convallis turpis lacus a diam.
          </ContentParagraph>
          <ContentParagraph>
            Vivamus sit amet velit consequat tellus fermentum bibendum. Donec eu
            lobortis nibh, eget vehicula risus. In metus urna, rhoncus nec nisi
            vitae, vehicula venenatis justo. Etiam vel dolor fermentum,
            porttitor metus tempor, molestie dui. Vivamus sit amet purus ante.
            Praesent aliquam vehicula lacus a fermentum. Vestibulum eu lectus
            turpis. Aenean tincidunt nunc at ligula porta blandit. Sed lacinia
            ultricies turpis a varius. Phasellus consequat imperdiet tellus, sit
            amet placerat tortor. Curabitur non feugiat erat, at suscipit nibh.
            Mauris sed sollicitudin augue.
          </ContentParagraph>
        </ContentPanel>
      </Container>
    </div>
  );
}
