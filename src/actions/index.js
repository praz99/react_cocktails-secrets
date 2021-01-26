const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const dataFetchStart = () => ({
  type: FETCH_START,
});

const dataFetchSuccess = data => ({
  type: FETCH_SUCCESS,
  data,
});

const dataFetchFailure = error => ({
  type: FETCH_FAILURE,
  error,
});

export { FETCH_START, FETCH_FAILURE, FETCH_SUCCESS, dataFetchStart, dataFetchSuccess, dataFetchFailure };
