"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, Modal, Select } from "@/components";

import * as S from "./styles";
import { schemaTransaction } from "./schema";
import { ModalTransactionProps, SchemaTransaction } from "./types";
import { initialState, OPTIONS_STATUS, OPTIONS_TYPE } from "./utils";

export function ModalTransaction({
  onClose,
  isVisible,
  transactionId,
}: ModalTransactionProps) {
  const {
    control,
    register,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaTransaction>({
    mode: "onBlur",
    resolver: zodResolver(schemaTransaction),
    defaultValues: initialState(),
    values: initialState(),
  });

  const onSubmitTransaction = (data: SchemaTransaction) => {
    console.log(data);
  };

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      className="sm:max-w-[580px] max-h-[90%] overflow-auto"
    >
      <S.Form onSubmit={handleSubmit(onSubmitTransaction)}>
        <S.TitleRemove>
          {transactionId ? "Editar" : "Criar"} transação
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
                    defaultValue={field.value}
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
                    defaultValue={field.value}
                    onChangeValue={field.onChange}
                    onClearFilter={() => resetField("type")}
                  />
                </div>
              )}
            />
          </div>
        </S.Grid>

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
