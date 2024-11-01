import { DescriptionItem } from "./DescriptionItem";
import { FigureItem } from "./FigureItem";
import { TitleItem } from "./TitleItem";

interface Props {
  urlItem: string;
  titleItem: string;
  descriptionItem: string;
}

export const CardItem = ({ urlItem, titleItem, descriptionItem }: Props) => {
  return (
    <article>
      <FigureItem urlItem={urlItem} />
      <TitleItem titleItem={titleItem} />
      <DescriptionItem descriptionItem={descriptionItem} />
    </article>
  );
};
