"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionStatusEnum, TransactionTypeEnum } from "@prisma/client";

import { Button, Input, Modal, Select } from "@/components";
import { createTransaction, updateTransaction } from "@/app/actions";

import * as S from "./styles";
import { schemaTransaction } from "./schema";
import { ModalTransactionProps, SchemaTransaction } from "./types";
import { initialState, OPTIONS_STATUS, OPTIONS_TYPE } from "./utils";

export function ModalTransaction({
  onClose,
  isVisible,
  transaction,
}: ModalTransactionProps) {
  const [messageErrorServer, setMessageError] = useState("");

  const {
    reset,
    control,
    register,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaTransaction>({
    mode: "onBlur",
    resolver: zodResolver(schemaTransaction),
    defaultValues: initialState(transaction),
    values: initialState(transaction),
  });

  const onSubmitTransaction = handleSubmit(async (data) => {
    try {
      if (transaction) {
        await updateTransaction(transaction.uid, data);
      } else {
        await createTransaction(data);
      }

      reset();
      onClose();
      setMessageError("");
    } catch (err) {
      setMessageError("Error in transaction");
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setMessageError("");
    }, 5000);
  }, [messageErrorServer]);

  const initialValueStatus: Record<TransactionStatusEnum, string> = {
    [TransactionStatusEnum.CONFIRMED]: "Confirmado",
    [TransactionStatusEnum.PENDING]: "Pendente",
  };

  const initialValueType: Record<TransactionTypeEnum, string> = {
    [TransactionTypeEnum.DEPOSIT]: "Deposito",
    [TransactionTypeEnum.WITHDRAW]: "Retirada",
  };

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      className="sm:max-w-[580px] max-h-[90%] overflow-auto"
    >
      <S.Form onSubmit={onSubmitTransaction}>
        <S.TitleRemove>
          {transaction ? "Editar" : "Criar"} transação
        </S.TitleRemove>

        <S.Grid>
          <div>
            <Input
              label="Nome"
              {...register("name")}
              placeholder="Escreva aqui..."
              helperText={errors.name?.message}
            />

            <Input
              label="Categoria"
              {...register("category")}
              placeholder="Escreva aqui..."
              helperText={errors.category?.message}
            />

            <Input
              label="Valor"
              type="number"
              min={0}
              {...register("amount")}
              helperText={errors.amount?.message}
            />
          </div>

          <div>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <div className="space-y-3">
                  <label>Status</label>

                  <Select
                    className="!border-gray-900 !text-gray-900 !p-4 !text-base !w-full sm:!w-[220px]"
                    options={OPTIONS_STATUS}
                    defaultValue={initialValueStatus[field.value]}
                    onChangeValue={field.onChange}
                    onClearFilter={() => resetField("status")}
                  />
                </div>
              )}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <div className="space-y-3">
                  <label>Tipo</label>

                  <Select
                    className="!border-gray-900 !text-gray-900 !p-4 !text-base !w-full sm:!w-[220px]"
                    options={OPTIONS_TYPE}
                    defaultValue={initialValueType[field.value]}
                    onChangeValue={field.onChange}
                    onClearFilter={() => resetField("type")}
                  />
                </div>
              )}
            />
          </div>
        </S.Grid>

        {messageErrorServer && (
          <p className="text-red-500">{messageErrorServer}</p>
        )}

        <S.Actions>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            title="Botão para fechar o modal"
          >
            Cancelar
          </Button>

          <Button title="Botão para confirmar edição" isLoading={isSubmitting}>
            Confirmar
          </Button>
        </S.Actions>
      </S.Form>
    </Modal>
  );
}
