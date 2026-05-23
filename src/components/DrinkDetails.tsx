import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { API_MAIN, API_DETAIL } from '../constants/api';
import useCocktailStore from '../store/cocktailStore';

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: calc(100vh - 160px);
`;

const Card = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  max-width: 1100px;
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 8px 30px rgba(2,6,23,0.6);
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 40%;
  min-width: 260px;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Description = styled.div`
  flex: 1 1 60%;
  padding: 0.25rem 0.5rem;
  color: var(--text);
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.75rem;
  td,
  th {
    padding: 8px 10px;
    text-align: left;
    border-bottom: 1px solid rgba(255,255,255,0.03);
  }
  .small-col {
    width: 5%;
  }
  .last-col {
    width: 60%;
  }
`;

const Instructions = styled.div`
  margin-top: 1rem;
  line-height: 1.5;
`;

const DrinkDetail = () => {
  const { id } = useParams();
  const drinks = useCocktailStore(state => state.details.drinks);
  const isLoading = useCocktailStore(state => state.details.isLoading);
  const isError = useCocktailStore(state => state.details.isError);
  const startDetailsFetch = useCocktailStore(state => state.startDetailsFetch);
  const completeDetailsFetch = useCocktailStore(state => state.completeDetailsFetch);
  const failDetailsFetch = useCocktailStore(state => state.failDetailsFetch);

  useEffect(() => {
    const fetchDetail = async () => {
      startDetailsFetch();
      try {
        const result = await axios(`${API_MAIN}${API_DETAIL}${id}`);
        completeDetailsFetch(result.data);
      } catch (error) {
        failDetailsFetch();
      }
    };

    fetchDetail();
  }, [id, startDetailsFetch, completeDetailsFetch, failDetailsFetch]);

  const ingredients: string[] = [];
  const quantity: string[] = [];

  if (drinks && drinks.length) {
    const drink = drinks[0];
    Object.entries(drink).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value) {
        const ingredient = value.split('');
        ingredient[0] = ingredient[0].toUpperCase();
        ingredients.push(ingredient.join(''));
      } else if (key.includes('strMeasure') && value) {
        quantity.push(value);
      }
    });
  }

  return (
    <>
      <Navbar />
      {isError && <div>Someting went wrong. Please try again...</div>}
      {isLoading ? (
        <div>Loading details...</div>
      ) : (
        drinks.map(drink => (
          <DetailsContainer key={drink.idDrink}>
            <Card>
              <ImageContainer>
                <Image src={drink.strDrinkThumb} alt={drink.strDrink} />
              </ImageContainer>
              <Description>
              <h1 className="drink-name detail-fields">{drink.strDrink}</h1>
              <p>
                <strong>Category:</strong>
                {' '}
                {drink.strCategory}
              </p>
              <p>
                <strong>Service Glass:</strong>
                {' '}
                {drink.strGlass}
              </p>
              <Table className="details-table">
                <thead>
                  <tr>
                    <th aria-label="blank" className="small-col" />
                    <th className="last-col">Ingredients</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((ingredient, i) => (
                    <tr className="row" key={`${ingredient}-${i + 1}`}>
                      <td className="small-col">
                        {i + 1}
                        .
                      </td>
                      <td className="last-col">{ingredient}</td>
                      <td>{quantity[i]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Instructions>
                <h3>Preparation</h3>
                {drink.strInstructions}
              </Instructions>
              </Description>
            </Card>
          </DetailsContainer>
        ))
      )}
      <Footer />
    </>
  );
};

export default DrinkDetail;
