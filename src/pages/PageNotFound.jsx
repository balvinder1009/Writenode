import { useTitle } from "../hooks/useTitle";
import pagenotfound from "../assets/images/pagenotfound.png";
import "./pageNotFound.css";
export const PageNotFound = () => {
  useTitle("Page Not Found!");
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found!</p>
      <img src={pagenotfound} alt="pagenotfound" />
    </section>
  );
};
