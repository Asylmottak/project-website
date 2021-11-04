import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// Check if server is in production
if (process.env.NODE_ENV === "production") {
  // Creaet new prisma client object
  prisma = new PrismaClient();
} else {
  // Check if global doesn't have a prisma property
  if (!(global as any).prisma) {
    // Add prisma property to global
    (global as any).prisma = new PrismaClient();
  }

  // Set global prisma value
  prisma = (global as any).prisma;
}

// Export prisma instance
export default prisma;
