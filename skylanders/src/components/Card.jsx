import { Button, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("json/SkyList.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="all_cards">
      {data.length
        ? data.map((skylanders) => (
            <>
              <div className={`${skylanders.elem} ${skylanders.jeuId} card`}>
                <img src={skylanders.image} alt={skylanders.title} />
                <div className="text">
                  <div className="headCard">
                    <h2>{skylanders.title}</h2>
                    <div className="check">
                      <button id="heart" className="heart">
                        <GoHeart size="1.8em" />
                      </button>
                      <Checkbox size="lg" padding="5px" id="checkbox" />
                    </div>
                  </div>
                  <div className="info">
                    <p className="jeu">{skylanders.jeu}</p>
                    <p className="element">{skylanders.elem}</p>
                    <img src={skylanders.elemImg} alt={skylanders.elem} />
                  </div>
                </div>
              </div>
            </>
          ))
        : null}
    </div>
  );
}

export default Card;
