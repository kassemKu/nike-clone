import { FC, MouseEventHandler } from "react";

export interface IShowCard {
  imgURL: string;
  changeBigShoeImage: MouseEventHandler<HTMLDivElement>;
  bigShoeImg: string;
}
const ShoeCard: FC<IShowCard> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}) => {
  return (
    <div
      className={`border-2 rounded-xl
  ${bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"}
  cursor-pointer max-sm:flex-1`}
      onClick={changeBigShoeImage}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="shoes"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
