import { Filters, Table } from "@/components";
import { TransactionService } from "@/data/services";

export default async function Home() {
  const transactions = await new TransactionService().findMany();

  return (
    <main className="container mx-auto py-10">
      <Filters />

      <Table transactions={transactions || []} />
    </main>
  );
}
