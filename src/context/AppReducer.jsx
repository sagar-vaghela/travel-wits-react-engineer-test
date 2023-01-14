import { FILTER_MOVIES, LOAD_MOVIES, UPDATE_GENRE_LIST, UPDATE_RATING_LIST, UPDATE_SEARCH_TEXT } from "../lib/constants";

const AppReducer = (state, action) => {
  switch (action.type) {
    case FILTER_MOVIES:
      let movieList = state.allMoviesList.filter((movie) =>
        movie.title.toLowerCase().includes(state.serachText)
      );

      const ratingFilter = [];
      state.allRatingList.filter((rating) => {
        if (rating.selected && rating.value > 0) {
          ratingFilter.push(rating.value);
        }
      });

      if (ratingFilter.length > 0) {
        movieList = movieList.filter((movie) =>
          ratingFilter.includes(movie.rating)
        );
      }

      const genreFilter = [];
      state.genreList.filter((genre) => {
        if (genre.selected && genre.value !== "") {
          genreFilter.push(genre.value);
        }
      });

      if (genreFilter.length > 0) {
        movieList = movieList.filter((movie) =>
          genreFilter.includes(movie.category)
        );
      }

      return {
        ...state,
        moviesList: movieList,
      };
    case LOAD_MOVIES:
      return {
        ...state,
        moviesList: state.allMoviesList,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        serachText: action.payload,
      };
    case UPDATE_RATING_LIST:
      return {
        ...state,
        allRatingList: action.payload,
      };
    case UPDATE_GENRE_LIST:
      return {
        ...state,
        genreList: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
