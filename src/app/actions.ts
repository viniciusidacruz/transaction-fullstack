"use server";

import { revalidatePath } from "next/cache";
import {
  PrismaClient,
  TransactionTypeEnum,
  TransactionStatusEnum,
} from "@prisma/client";

import { ErrorHandler } from "@/data/validations/errors";

const db = new PrismaClient();

export interface CreateInput {
  name: string;
  amount: number;
  category: string;
  type: TransactionTypeEnum;
  status: TransactionStatusEnum;
}

/**
 * Cria uma nova transação no banco de dados.
 *
 * @param data - Os dados da nova transação a ser criada, incluindo nome, valor, categoria, tipo e status.
 * @throws Lança um erro se a validação dos dados falhar ou se ocorrer um erro ao criar a transação no banco de dados.
 */
export async function createTransaction(data: CreateInput): Promise<void> {
  ErrorHandler.handleValidationError(data);

  try {
    await db.transaction.create({ data });

    revalidatePath("/");
  } catch (err) {
    console.error("Error creating transaction:", err);
    throw err;
  }
}

/**
 * Deleta uma transação existente no banco de dados.
 *
 * @param transactionId - O ID da transação a ser deletada.
 * @throws Lança um erro se ocorrer um problema ao deletar a transação no banco de dados.
 */
export async function deleteTransaction(transactionId: string): Promise<void> {
  try {
    await db.transaction.delete({ where: { uid: transactionId } });

    revalidatePath("/");
  } catch (err) {
    console.error("Error deleting transaction:", err);
    throw err;
  }
}

/**
 * Atualiza uma transação existente no banco de dados.
 *
 * @param transactionId - O ID da transação a ser atualizada.
 * @param payload - Os novos dados da transação, incluindo nome, valor, categoria, tipo e status.
 * @throws Lança um erro se a validação dos dados falhar ou se ocorrer um problema ao atualizar a transação no banco de dados.
 */
export async function updateTransaction(
  transactionId: string,
  payload: CreateInput
) {
  ErrorHandler.handleValidationError(payload);

  try {
    await db.transaction.update({
      where: { uid: transactionId },
      data: payload,
    });

    revalidatePath("/");
  } catch (err) {
    console.error("Error editing transaction:", err);
    throw err;
  }
}
