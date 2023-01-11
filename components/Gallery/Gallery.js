import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FullScreenImage from "./FullScreenImage";

const galleryImages = [
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

export default function Gallery(props) {
  const [selectedImage, setSelectedImage] = useState(false);

  return (
    <div className="xl:flex flex-wrap gap-8">
      {galleryImages.map((galleryImage, galleryImageIndex) => {
        return (
          <div
            key={galleryImageIndex}
            className="block xl:w-64 xl:h-64 my-8 xl:m-0"
          >
            <Image
              alt=""
              width={320}
              height={320}
              src={`/img/photos/${galleryImage}.jpg`}
              className="object-cover w-full xl:h-64 xl:w-64 cursor-pointer shadow-sm hover:scale-105 hover:shadow-xl transition-all duration-200"
              onClick={() => {
                setSelectedImage(galleryImage);
              }}
            />
          </div>
        );
      })}
      <AnimatePresence move="wait">
        {selectedImage !== false && (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              enter: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <FullScreenImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              allImages={galleryImages}
              key={selectedImage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
