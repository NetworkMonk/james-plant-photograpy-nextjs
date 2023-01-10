import { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";

const backgroundImages = [
  "DSC00058",
  // "DSC01078",
  "DSC01151",
  "DSC02088",
  "DSC02109",
  "DSC03421",
  "DSC03616",
  "DSC03976",
  "DSC04068",
  // "DSC05589",
  "DSC05658",
  "DSC05709",
  "IMG_0445",
  "IMG_0466",
  "IMG_0772",
  "IMG_0980",
  "IMG_2270",
  "IMG_3092",
  "IMG_3143",
  "IMG_3280",
  "IMG_9111",
  "IMG_9192",
  // "IMG_9194",
];

export default function BackgroundSlideShow() {
  const [backgroundImageCycle, setBackgroundImageCycle] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setCurrentBackground(currentBackground + 1 >= backgroundImageCycle.length ? 0 : currentBackground + 1);
    }, 10000);
    return () => clearInterval(cycleTimer);
  }, [currentBackground, backgroundImageCycle]);

  useEffect(() => {
    setBackgroundImageCycle(backgroundImages.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden select-none pointer-events-none">
      {backgroundImageCycle && backgroundImageCycle.map((image, imageIndex) => {
        return (
          <BackgroundImage key={imageIndex} image={image} visible={currentBackground === imageIndex} />
        )
      })}
    </div>
  );
}