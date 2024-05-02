import { doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase/config";
/* eslint-disable react/prop-types */
import "./postCard.css";
// eslint-disable-next-line react/prop-types
export const PostCard = ({ post, toggle, setToggle }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handleDelete() {
    const document = doc(db, "posts", id);
    await deleteDoc(document);
    setToggle(!toggle);
  }
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author"> - {author.name}</span>
        <span onClick={handleDelete} className="delete">
          {isAuth && author.id === auth.currentUser.uid && (
            <i className="bi bi-trash"></i>
          )}
        </span>
      </p>
    </div>
  );
};
