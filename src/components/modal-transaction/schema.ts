import { z } from "zod";

export const schemaTransaction = z.object({
  name: z.string().min(1, { message: "Campo obrigatório" }),
  amount: z.coerce.number(),
  status: z.string(),
  category: z.string().min(1, { message: "Campo obrigatório" }),
  type: z.string(),
});
