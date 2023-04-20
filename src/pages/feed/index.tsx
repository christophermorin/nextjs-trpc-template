import { trpc } from "../../utils/trpc"

export default function Feed() {
  // const context = trpc.useContext()
  const { data, isLoading, isError } = trpc.post.getAllPosts.useQuery();

  if (isLoading || !data) {
    return (
      <div>Loading....</div>
    )
  }


  return (
    <div>
      <ul>
        {data.map(post => {
          return (
            <div key={post.id}>
              <li>{post.title}</li>
              <li>{post.content}</li>
              <li></li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}