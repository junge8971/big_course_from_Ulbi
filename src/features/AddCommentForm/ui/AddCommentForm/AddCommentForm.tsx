import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface AddCommentFormComponentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentFormComponent: FC<AddCommentFormComponentProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const formText = useSelector(getAddCommentFormText);
  const formError = useSelector(getAddCommentFormError);

  const onChangeCommentText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );
  const onSendHandler = useCallback(() => {
    onSendComment(formText);
    onChangeCommentText('');
  }, [formText, onChangeCommentText, onSendComment]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.addCommentForm, [className])}>
        <Input
          placeholder={t('Введите коментарий')}
          value={formText}
          onChange={onChangeCommentText}
          className={cls.input}
        />
        <Button theme={ButtonTheme.outline} onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentFormComponent);
