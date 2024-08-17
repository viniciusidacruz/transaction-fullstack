import { Button, Modal } from "@/components";

import * as S from "./styles";
import { ModalRemoveProps } from "./types";

export function ModalRemove({
  onClose,
  isVisible,
  onConfirm,
}: ModalRemoveProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose} className="max-w-[380px]">
      <S.TitleRemove>Deseja mesmo remover esse item?</S.TitleRemove>

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
          onClick={onConfirm}
          title="Botão para confirmar exclusão"
        >
          Confirmar
        </Button>
      </S.Actions>
    </Modal>
  );
}
