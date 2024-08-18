export type FilterBy = "name" | "createdAt" | "amount" | "status";

export interface FindManyInput {
  filterBy?: FilterBy;
  searchTerm?: string;
}
