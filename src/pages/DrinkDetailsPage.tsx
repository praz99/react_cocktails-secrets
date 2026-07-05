import { useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { API_MAIN, API_DETAIL } from "../constants/api";
import useCocktailStore from "../store/cocktailStore";

const W = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const M = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.glassBg};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const ImgSec = styled.div`
  flex: 0 0 38%;
  min-width: 260px;
`;
const Img = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
const Info = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;
const Name = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;
const Meta = styled.p`
  margin-bottom: 0.35rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textDim};
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  th {
    text-align: left;
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.muted};
    border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  }
  td {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  }
`;

const Inst = styled.div`
  margin-top: 1.25rem;
  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.7;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textDim};
  }
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
  margin-bottom: 1rem;
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
`;

const DrinkDetailPage = () => {
  const { id } = useParams();
  const drinks = useCocktailStore((s) => s.details.drinks);
  const isLoading = useCocktailStore((s) => s.details.isLoading);
  const isError = useCocktailStore((s) => s.details.isError);
  const start = useCocktailStore((s) => s.startDetailsFetch);
  const complete = useCocktailStore((s) => s.completeDetailsFetch);
  const fail = useCocktailStore((s) => s.failDetailsFetch);

  useEffect(() => {
    const fetchDetail = async () => {
      start();
      try {
        const r = await axios(`${API_MAIN}${API_DETAIL}${id}`);
        complete(r.data);
      } catch {
        fail();
      }
    };
    fetchDetail();
  }, [id, start, complete, fail]);

  const ingredients: string[] = [];
  const quantity: string[] = [];

  if (drinks?.length) {
    const d = drinks[0];
    Object.entries(d).forEach(([k, v]) => {
      if (k.includes("strIngredient") && v)
        ingredients.push(v.charAt(0).toUpperCase() + v.slice(1));
      else if (k.includes("strMeasure") && v) quantity.push(v);
    });
  }

  return (
    <W>
      <Navbar />
      <M>
        {isError && <Msg>Something went wrong. Please try again…</Msg>}
        {isLoading ? (
          <Msg>Loading details…</Msg>
        ) : (
          drinks?.map((d) => (
            <div key={d.idDrink}>
              <Back to="/">← Back</Back>
              <Card>
                <ImgSec>
                  <Img src={d.strDrinkThumb} alt={d.strDrink} />
                </ImgSec>
                <Info>
                  <Name>{d.strDrink}</Name>
                  <Meta>
                    <strong>Category:</strong> {d.strCategory}
                  </Meta>
                  <Meta>
                    <strong>Glass:</strong> {d.strGlass}
                  </Meta>
                  <Meta>
                    <strong>Type:</strong> {d.strAlcoholic}
                  </Meta>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Ingredient</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ing, i) => (
                        <tr key={`${ing}-${i}`}>
                          <td>{i + 1}</td>
                          <td>{ing}</td>
                          <td>{quantity[i] || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Inst>
                    <h3>Preparation</h3>
                    <p>{d.strInstructions}</p>
                  </Inst>
                </Info>
              </Card>
            </div>
          ))
        )}
      </M>
      <Footer />
    </W>
  );
};

export default DrinkDetailPage;
