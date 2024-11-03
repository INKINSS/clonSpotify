interface Props {
  descriptionItem: string;
}

export const DescriptionItem = ({ descriptionItem }: Props) => {
  return <span className="text-[.8rem] text-grayLight line-clamp-2 leading-4">{descriptionItem}</span>;
};
