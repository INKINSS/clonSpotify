interface Props {
  descriptionItem: string;
}

export const DescriptionItem = ({ descriptionItem }: Props) => {
  return <span>{descriptionItem}</span>;
};
