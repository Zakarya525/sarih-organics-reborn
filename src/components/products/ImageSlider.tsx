
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface ImageSliderProps {
  images: string[];
  productName: string;
  onSelect?: (index: number) => void;
  selectedIndex?: number;
}

const ImageSlider = ({ 
  images, 
  productName, 
  onSelect,
  selectedIndex = 0
}: ImageSliderProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="bg-sari-cream-100 rounded-lg overflow-hidden aspect-square">
                <OptimizedImage
                  src={image}
                  alt={`${productName} - image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3 mt-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => onSelect && onSelect(index)}
              className={`rounded-md overflow-hidden aspect-square border-2 ${
                selectedIndex === index ? "border-sari-terracotta-500" : "border-transparent"
              }`}
            >
              <OptimizedImage
                src={img}
                alt={`${productName} - thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={100}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
