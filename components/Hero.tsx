import Image from "next/image";
import mainImage from "@/public/images/main-image.png";

export default function Hero() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text section with center alignment on small screens */}
          <div className="text-bloc md:w-1/2 mb-8 lg:h-96">
            <h1 className="lg:mt-0 uppercase font-bold text-4xl md:text-6xl mb-4 ">
              The best way to build anything
            </h1>
            <p className="font-medium text-base mb-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              mollitia optio exercitationem modi deserunt voluptatem maiores,
              dolorum ipsam, voluptate dolorem et neque repudiandae accusantium
              voluptatibus id eum esse quidem! Cumque.
            </p>
            <div className="flex space-x-4">
              <button className="btn btn-primary">Log In</button>
            </div>
          </div>

          {/* Image section */}
          <div className="image-bloc md:w-1/2">
            <Image
              src={mainImage}
              width={500}
              height={500}
              alt="Main hero image"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
