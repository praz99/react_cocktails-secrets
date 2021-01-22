import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.drinks.map(item => (
        <li key={item.idDrink}>
          {item.strDrink}
          <img src={item.strDrinkThumb} alt="..." />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
