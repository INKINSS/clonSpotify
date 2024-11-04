import { LabeSection } from "../common/labelSection/LabeSection";
import { FigureItem } from "../common/cardItem/FigureItem";
import { DescriptionItem } from "../common/cardItem/DescriptionItem";
import { TitleItem } from "../common/cardItem/TitleItem";

interface Episode {
  id: number;
  titleItem: string;
  descriptionItem: string;
  urlItem: string;
}

interface Props {
  labelSection: string;
  collection: Episode[];
}

export const SectionItems = ({ labelSection, collection }: Props) => {
  return (
    <section className="">
      <LabeSection labelSection={labelSection} />
      <section className="flex overflow-x-auto scrollbar-hide my-4">
        {collection.map((item) => (
          <article className="flex flex-col p-[.5rem] rounded-md min-w-[11rem] hover:bg-hoverGrayCard" key={item.id}>
            <FigureItem urlItem={item.urlItem} />
            <TitleItem titleItem={item.titleItem} />
            <DescriptionItem descriptionItem={item.descriptionItem} />
          </article>
        ))}
      </section>
    </section>
  );
};
