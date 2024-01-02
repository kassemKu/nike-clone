import Button from "../Components/Button";

import { useCallback, useState } from "react";
import { arrowRight } from "public/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "public/images";
import ShoeCard from "~/Components/ShoeCard";
const Hero = () => {
  const [bigShoeImg, setBigShoe] = useState(bigShoe1);

  const handleChangeShoeImg = useCallback(
    (imgURL: string) => {
      console.log(imgURL);

      setBigShoe(imgURL);
    },
    [setBigShoe]
  );

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-[1440px] my-0 mx-auto"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 px-8 pt-28">
        <p className="text-xl font-montserrat text-coral-red ">
          Our summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center
      "
      >
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe.bigShoe}
                changeBigShoeImage={() => handleChangeShoeImg(shoe.bigShoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
