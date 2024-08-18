import Image from "next/image";
import { prismaClient } from "@/shared/lib";
import { TransactionService } from "@/data/services";

import * as S from "./styles";
import { Details } from "./components/details";

export default async function Transaction({
  params: { id },
}: {
  params: { id: string };
}) {
  const transaction = await new TransactionService(prismaClient).findOne(id);

  return (
    <S.Wrapper className="container mx-auto px-8 sm:px-0">
      <S.Container>
        <Image
          src="/assets/svg/details.svg"
          alt="Uma pessoa ao lado de um card"
          width={380}
          height={380}
          priority
        />
        <Details transaction={transaction} />
      </S.Container>
    </S.Wrapper>
  );
}
