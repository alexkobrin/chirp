import Prisma  from "@prisma/client";

const prisma =  new Prisma.PrismaClient();
// Ready to use prisma instance
export { prisma }