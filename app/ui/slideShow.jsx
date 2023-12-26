'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/burger.jpg", alt: "A delicious, juicy burger" },
  { src: "/images/curry.jpg", alt: "A delicious, spicy curry" },
  { src: "/images/dumplings.jpg", alt: "Steamed dumplings" },
  { src: "/images/macncheese.jpg", alt: "Mac and cheese" },
  { src: "/images/pizza.jpg", alt: "A delicious pizza" },
  { src: "/images/schnitzel.jpg", alt: "A delicious schnitzel" },
  { src: "/images/tomato-salad.jpg", alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[25rem] w-[30rem] ml-[10rem] mt-[3.5rem] rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="text-white hover:text-gray-300 p-2"
          onClick={() =>
            setCurrentImageIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : images.length - 1
            )
          }
        >
          &lt;
        </button>
        <button
          className="text-white hover:text-gray-300 p-2"
          onClick={() =>
            setCurrentImageIndex((prevIndex) =>
              prevIndex < images.length - 1 ? prevIndex + 1 : 0
            )
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
