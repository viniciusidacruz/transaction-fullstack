import { useState } from "react";

import { Button, Modal } from "@/components";

import * as S from "./styles";
import { ModalRemoveProps } from "./types";

/**
 * Componente modal para confirmação da remoção da transação.
 *
 * @param onClose - Função chamada ao fechar o modal.
 * @param isVisible - Define se o modal está visível.
 * @param onConfirm - Função chamada ao confirmar a remoção da transação.
 */
export function ModalRemove({
  onClose,
  isVisible,
  onConfirm,
}: ModalRemoveProps) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [messageErrorServer, setMessageError] = useState("");

  const handleRemove = async () => {
    setIsRemoving(true);

    try {
      onConfirm();
      setIsRemoving(false);
      setMessageError("");
    } catch (err) {
      setMessageError("Error creating transaction");
    }
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose} className="max-w-[380px]">
      <S.TitleRemove>Deseja mesmo remover esse item?</S.TitleRemove>

      {messageErrorServer && (
        <small className="text-red-600">{messageErrorServer}</small>
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

        <Button
          type="button"
          isLoading={isRemoving}
          onClick={handleRemove}
          title="Botão para confirmar exclusão"
        >
          Confirmar
        </Button>
      </S.Actions>
    </Modal>
  );
}
