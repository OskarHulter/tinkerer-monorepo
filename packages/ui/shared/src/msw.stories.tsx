import type { Story } from '@ladle/react';
import { msw } from '@ladle/react';
import { useEffect, useState } from 'react';

const FETCH_URL = '/api-url.json';

// Set default handlers for all stories
export default {
  msw: [
    msw.rest.get(FETCH_URL, (_, res, ctx) => {
      return res(ctx.json([{ id: 1, title: 'msw post default' }]));
    }),
  ],
};

async function initPosts() {
    const data = await fetch(FETCH_URL);
    const json = await data.json();
    return json;
}
export const Mocked: Story = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      const json = await initPosts();
      setPosts(json);
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

// handlers for this story only
// Mocked.msw = [];
