interface Props {
  labelSection: string;
}

export const LabeSection = ({ labelSection }: Props) => {
  return <h2 className="font-bold mx-4 text-white text-[1.7rem] leading-8">{labelSection}</h2>;
};
