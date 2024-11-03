interface Props {
  titleItem: string;
}

export const TitleItem = ({ titleItem }: Props) => {
  return <h3 className="font-bold text-white mt-[.4rem] text-[.8rem] truncate">{titleItem}</h3>;
};
