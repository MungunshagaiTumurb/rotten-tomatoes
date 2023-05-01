import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-full mx-auto">
        <Image
          src={"/netflix-cover.jpg"}
          width={1200}
          height={300}
          alt="home cinema"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Hero;
