"use server";

import { revalidatePath } from "next/cache";
import {
  PrismaClient,
  TransactionTypeEnum,
  TransactionStatusEnum,
} from "@prisma/client";

import { schemaTransaction } from "@/components/modal-transaction/schema";

const db = new PrismaClient();

interface CreateInput {
  name: string;
  amount: number;
  category: string;
  type: TransactionTypeEnum;
  status: TransactionStatusEnum;
}

export async function createTransaction(data: CreateInput): Promise<void> {
  const result = schemaTransaction.safeParse(data);

  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    throw new Error("Validation failed. Please check your input data.");
  }

  try {
    await db.transaction.create({ data: result.data });

    revalidatePath("/");
  } catch (err) {
    console.error("Error creating transaction:", err);
    throw err;
  }
}

export async function deleteTransaction(transactionId: string): Promise<void> {
  try {
    await db.transaction.delete({ where: { uid: transactionId } });

    revalidatePath("/");
  } catch (err) {
    console.error("Error deleting transaction:", err);
    throw err;
  }
}

export async function updateTransaction(
  transactionId: string,
  payload: CreateInput
) {
  const result = schemaTransaction.safeParse(payload);

  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    throw new Error("Validation failed. Please check your input data.");
  }

  try {
    await db.transaction.update({
      where: { uid: transactionId },
      data: result.data,
    });

    revalidatePath("/");
  } catch (err) {
    console.error("Error editing transaction:", err);
    throw err;
  }
}
