type Props = {
  value: number;
};
export default function RenderUtility({ value }: Props) {
  return value ? "Utilitas" : "Non Utilitas";
}
