interface Props {
  urlItem: string;
}

export const FigureItem = ({ urlItem }: Props) => {
  return (
    <figure>
      <img src={urlItem} />
    </figure>
  );
};
