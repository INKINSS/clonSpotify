import "@/../firebase";
import { SectionItems } from "@/assets/components/SectionItems";
import useCollection from "@/assets/hooks/useCollection";

export const Mobile = () => {

  const episodes = useCollection('episodes');
  const artist = useCollection('artist');

  return (
    <main className="mx-2">
      <SectionItems
        labelSection="Episodios que podrían gustarte"
        collection={episodes}
      />
      <SectionItems 
      labelSection="Artistas destacados"
      collection={artist}
      />
    </main>
  );
};
