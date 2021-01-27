const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const CHANGE_FILTER = 'CHANGE_FILTER';

const dataFetchStart = () => ({
  type: FETCH_START,
});

const dataFetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data.drinks,
});

const dataFetchFailure = () => ({
  type: FETCH_FAILURE,
});

const changeCategoryAction = category => ({
  type: CHANGE_FILTER,
  category,
});

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  CHANGE_FILTER,
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
  changeCategoryAction,
};
