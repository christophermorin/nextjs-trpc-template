import { procedure, createTRCPRouter } from '../../api/trpc';
import { prisma } from '../../db';

export const postRouter = createTRCPRouter({
  getAllPosts: procedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
    })
    return posts
  })
})
