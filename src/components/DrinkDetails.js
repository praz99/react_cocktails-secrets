import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DrinkDetail = () => {
  const [detail, setDetail] = useState({ drinks: [] });

  useEffect(() => {
    const fetchDetail = async () => {
      const result = await axios(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222',
      );

      setDetail(result.data);
    };

    fetchDetail();
  }, []);

  return (
    detail.drinks.map(drink => (
      <div className="details-container" key={drink.idDrink}>
        <div className="details-image-container">
          {/* <img className="details-image" src={drink.strDrinkThumb} alt={drink.strDrink} /> */}
        </div>
        <div className="details-description">
          <h1>{drink.strDrink}</h1>
          <p>
            Category:
            {' '}
            {drink.strCategory}
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
              <tr>
                <td>1.</td>
                <td>{drink.strIngredient1}</td>
                <td>{drink.strMeasure1}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>{drink.strIngredient2}</td>
                <td>{drink.strMeasure2}</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>{drink.strIngredient3}</td>
                <td>{drink.strMeasure3}</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>{drink.strIngredient4}</td>
                <td>{drink.strMeasure4}</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>{drink.strIngredient5}</td>
                <td>{drink.strMeasure5}</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>{drink.strIngredient6}</td>
                <td>{drink.strMeasure6}</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>{drink.strIngredient7}</td>
                <td>{drink.strMeasure7}</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>{drink.strIngredient8}</td>
                <td>{drink.strMeasure8}</td>
              </tr>
              <tr>
                <td>9.</td>
                <td>{drink.strIngredient9}</td>
                <td>{drink.strMeasure9}</td>
              </tr>
              <tr>
                <td>10.</td>
                <td>{drink.strIngredient10}</td>
                <td>{drink.strMeasure10}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ))
  );
};

export default DrinkDetail;
