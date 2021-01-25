import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_MAIN, API_DETAIL } from '../constants/api';
import '../styles/DrinkDetail.css';

const DrinkDetail = () => {
  const [detail, setDetail] = useState({ drinks: [] });

  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      const result = await axios(
        `${API_MAIN}${API_DETAIL}${id}`,
      );

      setDetail(result.data);
    };

    fetchDetail();
  }, []);

  const ingredients = [];
  const quantity = [];

  // Object.entries(detail.drinks).forEach(([key, value]) => {
  //   if (key.includes('strIngredient') && value) {
  //     const ingredient = value.split('');
  //     ingredient[0] = ingredient[0].toUpperCase();
  //     ingredients.push(ingredient.join(''));
  //   } else if (key.includes('strMeasure') && value) {
  //     quantity.push(value);
  //   }
  // });

  return (
    detail.drinks.map(drink => (
      <div className="details-container" key={drink.idDrink}>
        <div className="details-image-container">
          <img className="details-image" src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
        <div className="details-description">
          <h1 className="drink-name detail-fields">{drink.strDrink}</h1>
          <p className="detail-fields">
            Category:
            {' '}
            {drink.strCategory}
          </p>
          <p className="detail-fields">
            Service Glass:
            {' '}
            {drink.strGlass}
          </p>
          <table className="details-table">
            <thead>
              <tr>
                <th aria-label="blank" />
                <th>Ingredients</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {
                ingredients.map((ingredient, i) => (
                  <tr className="row" key={`${ingredient}-${i + 1}`}>
                    <td>{ingredient}</td>
                    <td>{quantity[i]}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="instructions">
            <h3>Preparation</h3>
            {drink.strInstructions}
          </div>
        </div>
      </div>
    ))
  );
};

export default DrinkDetail;
