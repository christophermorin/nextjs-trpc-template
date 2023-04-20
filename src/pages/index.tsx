import { trpc } from '../utils/trpc';

export default function Home() {
  const { data } = trpc.post.getAllPosts.useQuery()
  return (
    <div>
      <h2 className='text-3xl font-bold'>Home</h2>
      <p>This is an example site to demonstrate how to use Nextjs, TRPC, NextAuth and Prisma</p>
    </div>
  )
}
