import * as trpcNext from '@trpc/server/adapters/next';
import { createTRPCContext } from '../../../server/api/trpc'
import { appRouter } from '../../../server/api/root'
// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError: ({ path, error }) => {
    console.log("In trpc pages", path, error)
  }
});