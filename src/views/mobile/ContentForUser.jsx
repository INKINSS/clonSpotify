import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase";
import { useEffect } from "react";
import { useState } from "react";

const ContentForUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = ref(database, "recommend");
    onValue(data, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-customWhite text-[1.5rem] mb-5 font-bold">
        Hecho para Ti
      </h2>
      <section className="flex space-x-4 w-full px-[1rem] overflow-auto no-scrollbar">
        {data.map((el) => (
          <article className="w-[8rem] h-[10rem]" key={el.id}>
            <figure className="w-[8rem] h-[8rem]">
              <img
                className="w-full h-full object-cover"
                src={el.urlPoster}
                alt={el.title}
              />
            </figure>
            <div className="mt-2 w-full">
              <span className=" w-full text-[.5rem] h-[3rem] inline-block overflow-hidden text-grayExtraLight">
                {el.footerDescription}
              </span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default ContentForUser;
