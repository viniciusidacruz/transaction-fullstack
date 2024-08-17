import { Transaction } from "@/shared/types";

export class TransactionService {
  async findMany(): Promise<Transaction[]> {
    try {
      const response = await fetch("http://localhost:4000/transactions");
      const data: Transaction[] = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (err) {
      console.error("Error fetching transactions:", err);

      throw err;
    }
  }
}
