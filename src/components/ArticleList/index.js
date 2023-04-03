import { useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articleReducer";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);
  console.log(articles);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);
  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/article/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
