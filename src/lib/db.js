import { PrismaClient } from '@prisma/client';

var globalForPrisma = {
  prisma: PrismaClient | undefined,
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
