import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFilmReviews from "../../services/fetchFilmReviews";
import Empty from "../Empty/Empty";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorName, setErrorName] = useState("");

  useEffect(() => {
    const getFilmReviews = async () => {
      try {
        const data = await fetchFilmReviews(movieId);
        setIsLoading(true);
        setIsError(false);
        if (data.results.length === 0) {
          setIsEmpty(true);
          return;
        }

        setReviews(data.results);
      } catch (error) {
        setIsError(true);
        setErrorName(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilmReviews();
  }, [movieId]);
  return (
    <>
      <h3>Review:</h3>
      {isLoading && <Loader />}
      {isError && <Error errorName={errorName} />}
      {isEmpty && <Empty />}
      {reviews !== null && (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
