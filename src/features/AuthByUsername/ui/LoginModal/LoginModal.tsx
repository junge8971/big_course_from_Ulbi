import { FC, Suspense, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';
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
      <Suspense>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

export const LoginModal = memo(LoginModalComponent);
