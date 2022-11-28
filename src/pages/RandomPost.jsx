import { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

import { getCommentsByPostId, getPostById } from "../api";

export const postLoader = async ({ params }) => {
  const postId = params.postId;
  const post = await getPostById(postId);
  const commentsPromise = getCommentsByPostId(postId);
  return defer({ post, commentsPromise });
};

const RandomPost = () => {
  const { post, commentsPromise } = useLoaderData();

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Suspense fallback={<small>Loading Comments...</small>}>
        <Await resolve={commentsPromise}>
          {(comments) =>
            comments.map((comment) => (
              <span key={comment.id}>
                <small>{comment.body}</small>
                <br />
              </span>
            ))
          }
        </Await>
      </Suspense>
    </section>
  );
};

export default RandomPost;
