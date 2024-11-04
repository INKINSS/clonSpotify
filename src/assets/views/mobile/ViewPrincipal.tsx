import "@/../firebase";
import { SectionItems } from "@/assets/components/SectionItems";
import useCollection from "@/assets/hooks/useCollection";

export const ViewPrincipal = () => {

  const episodes = useCollection('episodes');
  const artist = useCollection('artist');
  const suggestions = useCollection('suggestions');

  return (
    <main>
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
