import { PrismaClient, Transaction } from "@prisma/client";

export class TransactionService {
  constructor(private db: PrismaClient) {}

  async findMany(): Promise<Transaction[]> {
    try {
      const response = await this.db.transaction.findMany({
        select: {
          uid: true,
          status: true,
          type: true,
          amount: true,
          category: true,
          name: true,
          createdAt: true,
        },
      });

      return response;
    } catch (err) {
      console.error("Error fetching transactions:", err);

      throw err;
    }
  }
}
