interface Props {
  urlItem: string;
}

export const FigureItem = ({ urlItem }: Props) => {
  return (
    <figure className="w-full h-[8rem]">
      <img className="w-full h-full object-cover" src={urlItem} alt={urlItem} />
    </figure>
  );
};
