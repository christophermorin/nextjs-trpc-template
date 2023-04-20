import { initTRPC } from '@trpc/server';
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import superjson from "superjson";

import { prisma } from '../db';
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  return {
    prisma,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        // zodError:
        //   error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});
// Base router and procedure helpers
export const createTRCPRouter = t.router;
export const procedure = t.procedure;