import { useState } from 'react';

export const useModal = (defaultOpen = false) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
