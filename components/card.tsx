import { cardData, cardData2, cardData3 } from "../data/cardData";
import CardData from "./cardData";

const Card = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="w-10/12 mx-auto">
          <h2 className="pt-[80px] pb-[20px] font-kern text-[38px] font-semibold leading-[46px] text-black">
            Featured
          </h2>
          <div className="font-kern pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Digital Canapés</p>
            <p className="-mt-[10px] -mb-[10px] text-[#707070] text-[14px] leading-[36px]">
              view
            </p>
          </div>
          <div className="flex flex-wrap">
            {cardData?.map((card, i) => (
              <CardData key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="font-kern pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Digital Canapés</p>
          </div>
          <div className="flex flex-wrap">
            {cardData2?.map((card, i) => (
              <CardData key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="font-kern pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Adam G</p>
          </div>
          <div className="flex flex-wrap">
            {cardData3?.map((card, i) => (
              <CardData key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
