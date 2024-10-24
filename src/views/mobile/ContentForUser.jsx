import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase";
import { useEffect } from "react";
import { useState } from "react";
import WaveDown from "../../common/WaveDown";

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
          <article
            className="w-[8rem] overflow-visible relative"
            key={el.id}
          >
            <figure className="w-[8rem] h-[8rem] relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={el.urlPoster}
                alt={el.title}
              />
              {el.isDecoration ? <WaveDown /> : ""}
              <h3
                className={`absolute bottom-[.5rem] leading-[.8rem] left-[.4rem] font-bold w-full text-[.7rem] inline-block overflow-hidden ${
                  el.isTextBlack ? "text-black" : "text-white"
                }`}
              >
                {el.titlePoster}
              </h3>
            </figure>
            <div className="mt-2 w-full">
              <span className="text-grayExtraLight w-full text-[.5rem] leading-[.8rem] inline-block">
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
