import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function FullScreenImage(props) {
  const { selectedImage, setSelectedImage, allImages } = props;

  const selectedIndex = allImages.findIndex((image) => image === selectedImage);
  const nextIndex =
    selectedIndex >= allImages.length - 1 ? 0 : selectedIndex + 1;
  const previousIndex =
    selectedIndex <= 0 ? allImages.length - 1 : selectedIndex - 1;

  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 max-h-100vh flex flex-col bg-black bg-opacity-100 select-none">
      <div>
        <div className="max-w-xl mx-auto flex p-4">
          <div className="flex-grow text-left">
            <ArrowLeftIcon
              className="w-6 h-6 cursor-pointer inline-block mr-5"
              onClick={() => setSelectedImage(allImages[previousIndex])}
              title="Previous"
            />
            <ArrowRightIcon
              className="w-6 h-6 cursor-pointer inline-block"
              onClick={() => setSelectedImage(allImages[nextIndex])}
              title="Next"
            />
          </div>
          <div>
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setSelectedImage(false)}
              title="Close"
            />
          </div>
        </div>
      </div>
      <div className="flex-grow max-h-full">
        <Image
          alt=""
          width={1920}
          height={1080}
          src={`/img/photos/${selectedImage}.jpg`}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
