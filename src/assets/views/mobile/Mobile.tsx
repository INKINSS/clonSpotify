import "@/../firebase";
import { HeaderMobile } from "@/assets/components/HeaderMobile";
import { SectionItems } from "@/assets/components/SectionItems";
import useCollection from "@/assets/hooks/useCollection";

export const Mobile = () => {

  const episodes = useCollection('episodes');
  const artist = useCollection('artist');
  const suggestions = useCollection('suggestions');

  return (
    <main className="mx-3">
      <HeaderMobile />
      <SectionItems
        labelSection="Episodios que podrían gustarte"
        collection={episodes}
      />
      <SectionItems 
      labelSection="Artistas destacados"
      collection={artist}
      />
      <SectionItems labelSection="Sugerencias para ti" collection={suggestions} />
    </main>
  );
};
