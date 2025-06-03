import React from 'react';

type ModalProps = {
  visible: boolean;
  children: React.ReactNode;
};

export default function Modal({ visible, children }: ModalProps) {
  if (!visible) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-content">{children}</div>
    </div>
  );
} 