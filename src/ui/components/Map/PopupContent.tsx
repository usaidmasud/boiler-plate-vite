import { ReactNode } from "react";
import RenderImage from "../RenderImage";

type TDescription = {
  label: string;
  value: string;
};
type Props = {
  imageUrl?: string;
  title: string;
  description: TDescription[];
  children?: ReactNode;
  linkDirection?: string;
  linkVirtualTour?: string;
};
function PopupContent({
  imageUrl,
  title,
  children,
  description,
  linkDirection,
  linkVirtualTour,
}: Props) {
  return (
    <div className="pt-4 font-sans">
      {imageUrl && (
        <div className="mb-4">
          <RenderImage url={imageUrl} width={"100%"} height={100} />
        </div>
      )}

      <h5 className="text-base font-semibold">{title}</h5>

      {children ?? (
        <ul className="mt-2 flex flex-col gap-0 ">
          {description.map((item, index) => (
            <PopUpContentDescription {...item} key={index} />
          ))}
        </ul>
      )}

      <div className="mt-2 flex justify-between gap-2">
        {linkVirtualTour && (
          <a
            href={linkVirtualTour}
            style={{
              color: "#fff",
            }}
            target="_blank"
            className="px-2 py-1 rounded-md bg-sky-500 hover:bg-sky-700 text-white duration-300 outline-none transition text-sm shadow-lg hover:text-white w-full text-center"
          >
            Virtual Tour
          </a>
        )}
        {linkDirection && (
          <a
            href={linkDirection}
            style={{
              color: "#fff",
            }}
            target="_blank"
            className="px-2 py-1 rounded-md text-center bg-sky-500 hover:bg-sky-700 text-white duration-300 outline-none transition text-sm shadow-lg hover:text-white w-full"
          >
            Direction
          </a>
        )}
      </div>
    </div>
  );
}

export function PopUpContentDescription({ label, value }: TDescription) {
  return (
    <li className="flex text-sm">
      <span className="w-28">{label}</span>
      <span className="flex-1">: {value}</span>
    </li>
  );
}
PopupContent.Description = PopUpContentDescription;
export default PopupContent;
