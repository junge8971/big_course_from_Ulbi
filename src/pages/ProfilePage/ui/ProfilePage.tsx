import { EditableProfileCard } from 'features/EditableProfileCard';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

interface ProfilePageComponentProps {
  className?: string;
}

const ProfilePageComponent: FC<ProfilePageComponentProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
};

export default memo(ProfilePageComponent);
