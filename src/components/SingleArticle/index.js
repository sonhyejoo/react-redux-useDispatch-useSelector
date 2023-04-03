import "./SingleArticle.css";
import { useParams } from "react-router-dom";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((art) => art.id === id);
  const { imageUrl, title, body } = article;

  return (
    <div className="singleArticle">
      <h1>{title}</h1>
      <img src={imageUrl} alt="home" />
      <p>{body}</p>
    </div>
  );
};

export default SingleArticle;
