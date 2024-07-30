import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalComponentProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModalComponent: FC<LoginModalComponentProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.loginModal, [className])}
    >
      <LoginForm />
    </Modal>
  );
};

export const LoginModal = memo(LoginModalComponent);
