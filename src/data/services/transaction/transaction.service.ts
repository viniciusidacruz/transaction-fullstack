import { PrismaClient, Transaction } from "@prisma/client";
import { FindManyInput } from "./transaction.types";

export class TransactionService {
  constructor(private db: PrismaClient) {}

  async findMany({ filterBy, searchTerm }: FindManyInput = {}): Promise<
    Transaction[]
  > {
    const orderDirection = filterBy === "name" ? "asc" : "desc";

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
        where: {
          name: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        ...(filterBy && {
          orderBy: {
            [filterBy]: orderDirection,
          },
        }),
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
