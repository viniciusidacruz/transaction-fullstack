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

  async findOne(transactionId: string): Promise<Transaction | null> {
    try {
      const response = await this.db.transaction.findUnique({
        where: { uid: transactionId },
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

      return response || null;
    } catch (err) {
      console.error("Error fetching transaction:", err);

      throw err;
    }
  }
}
