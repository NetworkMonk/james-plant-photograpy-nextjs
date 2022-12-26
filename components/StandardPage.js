import Head from "next/head";
import BackgroundSlideShow from "./BackgroundSlideShow";
import Menu from '../components/Menu'

export default function StandardPage(props) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>James Plant Photography</title>
        <meta name="description" content="Portrait photographer in London and Essex. Premium portraits to an excellent standard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute -z-20 top-0 left-0 right-0 bottom-0 bg-black"></div>
      <BackgroundSlideShow />
      <Menu />

      <div className="absolute right-0 top-0 bottom-0 w-screen lg:w-1/2 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full">
          {props.children}
        </div>
      </div>
    </div>
  )
}