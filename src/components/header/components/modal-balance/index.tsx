"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { zodResolver } from "@hookform/resolvers/zod";

import { useBalanceStore } from "@/shared/stores";
import { Button, Input, Modal } from "@/components";

import * as S from "./styles";
import { schemaBalance } from "./schema";
import { ModalBalanceProps, SchemaBalance } from "./types";

export function ModalBalance({
  onClose,
  isVisible,
  onConfirm,
}: ModalBalanceProps) {
  const { balance } = useBalanceStore();

  console.log("balance: ", balance);

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SchemaBalance>({
    mode: "onBlur",
    resolver: zodResolver(schemaBalance),
    values: {
      balance: 0,
    },
  });

  const onSubmitBalance = handleSubmit(async (data) => {
    onConfirm(data.balance);
    onClose();
  });

  useEffect(() => {
    return () => reset();
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} onClose={onClose} className="sm:max-w-[320px]">
      <S.Form onSubmit={onSubmitBalance}>
        <S.TitleBalance>Atualizar saldo</S.TitleBalance>

        <NumericFormat
          label="Valor"
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          allowNegative={false}
          customInput={Input}
          {...register("balance")}
          onValueChange={(values) => {
            const { value } = values;
            setValue("balance", +value);
          }}
          placeholder="R$1.000,00"
          helperText={errors.balance?.message}
        />

        <S.Actions>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            title="Botão para fechar o modal"
          >
            Cancelar
          </Button>

          <Button title="Botão para confirmar edição" disabled={!isValid}>
            Confirmar
          </Button>
        </S.Actions>
      </S.Form>
    </Modal>
  );
}
