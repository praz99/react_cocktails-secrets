const DRINK = 'DRINK';
const DRINK_FETCH_BEGIN = 'DRINK_FETCH_BEGIN';
const DRINK_FETCH_SUCCESS = 'DRINK_FETCH_SUCCESS';
const DRINK_FETCH_FAILURE = 'DRINK_FETCH_FAILURE';

const getDrinkAction = id => (
  {
    type: DRINK,
    payload: id,
  }
);

const fetchBeginAction = () => (
  {
    type: DRINK_FETCH_BEGIN,
  }
);

const fetchSuccessAction = data => (
  {
    type: DRINK_FETCH_SUCCESS,
    payload: data.drinks,
  }
);

const fetchFailureAction = () => (
  {
    type: DRINK_FETCH_FAILURE,
  }
);
