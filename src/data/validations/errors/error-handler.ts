import { CreateInput } from "@/app/actions";
import { schemaTransaction } from "@/components/internal/modal-transaction/schema";

export class ErrorHandler {
  public static handleValidationError(input: CreateInput): void {
    const result = schemaTransaction.safeParse(input);

    if (!result.success) {
      console.error("Validation failed:", result.error.format());
      throw new Error("Validation failed. Please check your input data.");
    }
  }

  public static async handleDatabaseOperation<T>(
    operation: () => Promise<T>
  ): Promise<void> {
    try {
      await operation();
    } catch (err) {
      console.error("Database operation failed:", err);
      throw err;
    }
  }
}
