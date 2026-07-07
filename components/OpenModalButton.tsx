"use client";

import { useModal } from "./ModalContext";
import type { ModalName } from "./ModalContext";

export default function OpenModalButton({
  modal,
  className = "btn btn-gold",
  children,
}: {
  modal: Exclude<ModalName, null>;
  className?: string;
  children: React.ReactNode;
}) {
  const { openModal } = useModal();
  return (
    <button type="button" className={className} onClick={() => openModal(modal)}>
      {children}
    </button>
  );
}
