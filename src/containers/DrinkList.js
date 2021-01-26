import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Drink from '../components/Drink';
import { API_MAIN, API_SEARCH } from '../constants/api';
import '../styles/DrinkList.css';

const DrinkList = ({ search }) => {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_MAIN}${API_SEARCH}${search}`,
      );

      setData(result.data);
    };

    fetchData();
  }, [search]);

  return (
    <div className="drink-list">
      {data.drinks.map(drink => (<Drink key={drink.idDrink} drink={drink} />))}
    </div>
  );
};

DrinkList.propTypes = {
  search: PropTypes.string.isRequired,
};

export default DrinkList;
