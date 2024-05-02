import { useEffect, useRef, useState } from "react";
import { PostCard, SkeletonCard } from "../components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";
export const Home = () => {
  useTitle("Home");
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([false, false, false]);
  const [toggle, setToggle] = useState(false);
  const postRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    // console.log("---");
    getPosts();
  }, [postRef, toggle]);
  return (
    <section>
      {posts.map((post) =>
        post ? (
          <PostCard
            key={post.title}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={post.title} />
        )
      )}
    </section>
  );
};
// const posts = [
//   {
//     title: "Google: Share interesting customer stories",
//     description:
//       "Google Maps is one of those things that doesn’t need much explaining. Most people know what it does, it helps you get from A to B. It can even find you a faster route when there’s loads of traffic up ahead. But a few days back, Google shared an interesting customer story on Twitter.",
//     author: "Google",
//   },
//   {
//     title: "Tony’s Chocolonely: Show people what’s happening",
//     description:
//       "Tony Chocolonely is a Dutch company that sells chocolate. Their chocolate bars are quite popular and their mission is to make chocolate 100% slave-free. As they are opinionated, which fits their mission, they often get a lot of engagement on their social posts. A year ago they opened a Chocolate Bar in Amsterdam and announced this news on LinkedIn",
//     author: "Tony’s Chocolonely",
//   },
// ];
