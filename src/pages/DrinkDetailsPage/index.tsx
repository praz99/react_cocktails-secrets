import { useCallback, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import ErrorPage from "../ErrorPage";
import { API_MAIN, API_DETAIL } from "../../constants/api";
import useCocktailStore from "../../store/cocktailStore";
import {
  W,
  M,
  Msg,
  Back,
  Card,
  ImgSec,
  Img,
  Info,
  Meta,
  Name,
  Table,
  Inst,
} from "./styles";

const DrinkDetailPage = () => {
  const { id } = useParams();
  const drinks = useCocktailStore((s) => s.details.drinks);
  const isLoading = useCocktailStore((s) => s.details.isLoading);
  const isError = useCocktailStore((s) => s.details.isError);
  const start = useCocktailStore((s) => s.startDetailsFetch);
  const complete = useCocktailStore((s) => s.completeDetailsFetch);
  const fail = useCocktailStore((s) => s.failDetailsFetch);

  const fetchDetail = useCallback(async () => {
    start();
    try {
      const r = await axios(`${API_MAIN}${API_DETAIL}${id}`);
      complete(r.data);
    } catch {
      fail();
    }
  }, [id, start, complete, fail]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

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
        {isError ? (
          <ErrorPage
            error={new Error("Failed to load drink details")}
            onRetry={fetchDetail}
          />
        ) : null}
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
