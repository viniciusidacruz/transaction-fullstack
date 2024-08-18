/*
  Warnings:

  - Changed the type of `status` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionStatusEnum" AS ENUM ('PENDING', 'CONFIRMED');

-- CreateEnum
CREATE TYPE "TransactionTypeEnum" AS ENUM ('DEPOSIT', 'WITHDRAW');

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "status",
ADD COLUMN     "status" "TransactionStatusEnum" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "TransactionTypeEnum" NOT NULL;
