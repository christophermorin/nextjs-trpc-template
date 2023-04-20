import { createTRCPRouter } from './trpc';
import { postRouter } from '../routers/posts/postsRouter';

export const appRouter = createTRCPRouter({
  post: postRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;