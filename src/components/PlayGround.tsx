import { useEffect, useState } from "react";

type POST_TYPE = {
  id: number;
  title: string;
  views: number;
};

const PlayGround = () => {
  const [posts, setPosts] = useState<POST_TYPE[]>([]);
  useEffect(() => {
    async function callApi() {
      const response = await fetch(`http://localhost:3000/posts`);
      const data = await response.json();
      setPosts(data);
      console.log({ data });
    }

    callApi();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h1>title - {post?.title}</h1>
            <h1>views - {post?.views}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default PlayGround;
