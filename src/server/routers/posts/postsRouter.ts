import { procedure, router } from '../../trpc';

interface Post {
  name: string,
  content: string,
}

const postsDB: Post[] = [
  {
    name: "Bob",
    content: "Testing posts"
  }
]

export const postRouter = router({
  getAllPosts: procedure.query((req) => {
    return postsDB
  })
})
