import "@/../firebase";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { SectionItems } from "@/assets/components/SectionItems";

export const Mobile = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const refItems = ref(db, "episodes");
    onValue(refItems, (snapshot) => {
      const data = snapshot.val();
      setCollection(data);
    });
  }, []);

  return (
    <main>
      <SectionItems
        labelSection="Episodios que podrían gustarte"
        collection={collection}
      />
    </main>
  );
};
