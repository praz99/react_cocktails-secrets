const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

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

export {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
};
