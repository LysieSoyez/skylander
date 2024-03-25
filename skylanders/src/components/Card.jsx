import React, { useEffect, useState } from "react";
import { Button, Checkbox } from "@chakra-ui/react";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function Card() {
  const [data, setData] = useState([]);
  const [wishListedItems, setWishListedItems] = useState(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("wishListedItems")) || {};
    return savedItems;
  });
  const [inCollectionItems, setInCollectionItems] = useState(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("inCollectionItems")) || {};
    return savedItems;
  });

  useEffect(() => {
    fetch("json/SkyList.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishListedItems", JSON.stringify(wishListedItems));
  }, [wishListedItems]);

  useEffect(() => {
    localStorage.setItem(
      "inCollectionItems",
      JSON.stringify(inCollectionItems)
    );
  }, [inCollectionItems]);

  const handleHeartButton = (id) => {
    setWishListedItems((prevWishListedItems) => {
      const updatedItems = { ...prevWishListedItems };
      if (updatedItems[id]) {
        delete updatedItems[id];
      } else {
        updatedItems[id] = true;
      }
      return updatedItems;
    });
  };

  const handleCheckboxChange = (id) => {
    setInCollectionItems((prevInCollectionItems) => {
      const updatedItems = { ...prevInCollectionItems };
      updatedItems[id] = !updatedItems[id];
      return updatedItems;
    });
  };

  return (
    <div className="all_cards">
      {data.map((skylanders) => {
        const isInWishList = wishListedItems[skylanders.id];
        const isInCollection = inCollectionItems[skylanders.id];
        return (
          <div
            className={`${skylanders.elem} ${skylanders.jeuId} card ${
              isInWishList ? "isInWishList" : "isNotInWishList"
            } ${isInCollection ? "isInCollection" : "isNotInCollection"}`}
            id={skylanders.id}
            key={skylanders.id}
          >
            <img src={skylanders.image} alt={skylanders.title} />
            <div className="text">
              <div className="headCard">
                <h2>{skylanders.title}</h2>
                <div className="check">
                  {isInWishList ? (
                    <GoHeartFill
                      className="heartIcon"
                      onClick={() => handleHeartButton(skylanders.id)}
                    />
                  ) : (
                    <GoHeart
                      className="heartIcon"
                      onClick={() => handleHeartButton(skylanders.id)}
                    />
                  )}
                  <Checkbox
                    size="lg"
                    padding="5px"
                    id={`checkbox-${skylanders.id}`}
                    isChecked={isInCollection}
                    onChange={() => handleCheckboxChange(skylanders.id)}
                  />
                </div>
              </div>
              <div className="info">
                <div className="elemImg">
                  <p className="jeu">{skylanders.jeu}</p>
                  <p className="element">{skylanders.elem}</p>
                </div>
                <img src={skylanders.elemImg} alt={skylanders.elem} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
