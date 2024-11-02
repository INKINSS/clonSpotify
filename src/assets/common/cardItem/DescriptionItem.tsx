interface Props {
  descriptionItem: string;
}

export const DescriptionItem = ({ descriptionItem }: Props) => {
  return <span className="text-[.8rem] line-clamp-2 leading-4">{descriptionItem}</span>;
};
