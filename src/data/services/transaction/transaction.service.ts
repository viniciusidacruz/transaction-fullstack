import { PrismaClient, Transaction } from "@prisma/client";

import { FindManyInput } from "./transaction.types";

/**
 * Serviço para manipulação de transações usando Prisma ORM.
 */
export class TransactionService {
  constructor(private db: PrismaClient) {}

  /**
   * Encontra múltiplas transações com base nos critérios de busca e filtro fornecidos.
   *
   * @param filterBy - Campo pelo qual as transações serão ordenadas. Pode ser `name` ou outro campo disponível.
   * @param searchTerm - Termo de busca para filtrar transações pelo nome.
   * @returns Uma promessa que resolve em um array de transações.
   */
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

  /**
   * Encontra uma única transação com base no ID fornecido.
   *
   * @param transactionId - O ID da transação que será buscada.
   * @returns Uma promessa que resolve em uma transação ou `null` se não for encontrada.
   */
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
