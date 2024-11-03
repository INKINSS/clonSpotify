// useEpisodes.ts
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

interface Episode {
  id: number;
  urlItem: string;
  titleItem: string;
  descriptionItem: string;
}

const useCollection = (collection: string) => {
  const [response, setResponse] = useState<Episode[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const refItems = ref(db, collection);
    onValue(refItems, (snapshot) => {
      const data: Episode[] = snapshot.val();
      setResponse(data);
    });
  }, [collection]);

  return response;
};

export default useCollection;