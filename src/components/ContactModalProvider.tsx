import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import ContactFormModal from './ContactFormModal';

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactFormModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
};

