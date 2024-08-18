import { database } from "@/shared/lib";
import { Filters, Table } from "@/components";
import { TransactionService } from "@/data/services";

import { FilterBy } from "@/data/services/transaction/transaction.types";

export default async function Home({
  searchParams: { filterBy, searchParam },
}: {
  searchParams: {
    filterBy: FilterBy | undefined;
    searchParam: string | undefined;
  };
}) {
  const transactions = await new TransactionService(database).findMany({
    filterBy,
    searchTerm: searchParam,
  });

  return (
    <main className="container mx-auto py-10">
      <Filters transactions={transactions || []} />

      <Table transactions={transactions || []} />
    </main>
  );
}
