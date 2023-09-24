import React from "react";

interface GalleryProps {
  images: string[];
  captions?: string[];
}

const Gallery = ({ images, captions = [] }: GalleryProps) => {
  return (
    <div className="flex w-full flex-wrap gap-4">
      {images.map((url, index) => (
        <figure
          key={index}
          className="w-full flex-1 md:w-1/2 lg:w-1/3 xl:w-1/4 m-0"
        >
          <img
            src={url}
            alt={`Image ${index}`}
            className="w-full h-auto rounded-md border border-border"
          />
          <figcaption className="text-sm text-secondary">
            {captions[index]}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
