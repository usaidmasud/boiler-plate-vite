import { ReactNode } from "react";

type TMapInfo = {
  children: ReactNode;
  imageUrl: string;
  title: string;
  linkVirtualTour?: string;
  linkDirection?: string;
};
function MapInfo({
  children,
  imageUrl,
  title,
  linkDirection,
  linkVirtualTour,
}: TMapInfo) {
  return (
    <div className="pt-4 font-sans">
      <div className="mb-4">
        <img src={imageUrl} alt="" className="w-full h-18" />
      </div>
      <h5 className="text-sm font-semibold">{title}</h5>

      <ul className="mt-2 text-xs flex flex-col gap-0 ">{children}</ul>
      <div className="mt-2 flex justify-between gap-2">
        {linkVirtualTour && (
          <button className="px-2 py-1 rounded-md bg-sky-500 hover:bg-sky-700 text-white duration-300 outline-none transition text-sm shadow-lg hover:text-white w-full">
            Virtual Tour
          </button>
        )}
        {linkDirection && (
          <button className="px-2 py-1 rounded-md bg-sky-500 hover:bg-sky-700 text-white duration-300 outline-none transition text-sm shadow-lg hover:text-white w-full">
            Direction
          </button>
        )}
      </div>
    </div>
  );
}

type TDetail = {
  label: string;
  value: string;
};
function Detail({ label, value }: TDetail) {
  return (
    <li className="flex">
      <span className="w-24">{label}</span>
      <span className="">: {value}</span>
    </li>
  );
}
MapInfo.Detail = Detail;
export default MapInfo;
