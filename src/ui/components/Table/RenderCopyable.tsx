import ButtonCopy from "../Button/ButtonCopy";

type Props = {
  text: string;
  value: string;
  tooltipText?: string;
};
export default function RenderCopyable({ text, value, tooltipText }: Props) {
  return (
    <div className="inline-flex gap-1 items-center">
      <span className="text-xs">{text}</span>
      <ButtonCopy value={value} tooltipText={tooltipText} />,
    </div>
  );
}
