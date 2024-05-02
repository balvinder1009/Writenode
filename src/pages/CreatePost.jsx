import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import "./createPost.css";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  useTitle("Create Post");
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  const handleCreatePost = async (event) => {
    event.preventDefault();
    console.log(auth);

    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };

    await addDoc(postRef, document);
    navigate("/");
  };
  return (
    <div className="createPost">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="create" onSubmit={handleCreatePost}>
        <input
          type="text"
          name="title"
          placeholder="title..."
          maxLength={50}
          autoComplete="off"
          required
        />
        <textarea
          name="description"
          id="description"
          placeholder="description..."
          maxLength={600}
          required
        ></textarea>
        <button className="createBtn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
