import { trpc } from '../utils/trpc';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {

  const hello = trpc.hello.useQuery({ text: 'client' });
  const allPosts = trpc.post.getAllPosts.useQuery()
  return (
    <div>
      <h2 className='text-3xl font-bold'>Home</h2>
      <p>This is an example site to demonstrate how to use Nextjs, TRPC, NextAuth and Prisma</p>
    </div>
  )
}
