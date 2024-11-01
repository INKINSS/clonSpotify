interface Props {
  titleItem: string;
}

export const TitleItem = ({ titleItem }: Props) => {
  return <h3>{titleItem}</h3>;
};
