import { getPayload } from "payload";
import configPromise from "@payload-config";

const HighlightArea = async () => {
  const payload = await getPayload({
    config: configPromise,
  });
  const getHouses = async () => {
    const houses = await payload.find({
      collection: "houses",
    });

    return houses;
  };
  const houses = await getHouses();

  return (
    <div className="max-w-[1200px] bg-white h-[600px] w-full rounded-xl shadow-sm shadow-black/20 p-10">
      <div className="flex items-center text-3xl gap-2 w-full border-b-[2px] border-b-black/20">
        Kiemelt
      </div>
      <div className="grid grid-cols-2 w-fulll h-full gap-10 p-10">
        <div className="w-full h-full bg-background rounded-xl"></div>
        <div className="w-full h-full bg-background rounded-xl"></div>
        <div className="w-full h-full bg-background rounded-xl"></div>
        <div className="w-full h-full bg-background rounded-xl"></div>
      </div>
    </div>
  );
};

export default HighlightArea;
