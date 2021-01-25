import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Drink from '../components/Drink';
import { API_MAIN, API_SEARCH } from '../constants/api';
import '../styles/DrinkList.css';

const DrinkList = () => {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_MAIN}${API_SEARCH}a`,
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="drink-list">
      {data.drinks.map(drink => (<Drink key={drink.idDrink} drink={drink} />))}
    </div>
  );
};

export default DrinkList;
