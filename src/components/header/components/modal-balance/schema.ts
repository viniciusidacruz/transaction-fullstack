import { z } from "zod";

export const schemaBalance = z.object({
  balance: z.coerce.number(),
});
