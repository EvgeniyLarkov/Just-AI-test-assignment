import React from 'react';
import SelectedSectionView from './SelectedSectionView';
import useStyles from './styles';
import UseSelectedSection from './useSelectedSection';
import {
  useDragEnterHandler,
  useDragDropHandler,
  useDragStartHandler,
  useDragEndHandler,
} from '../../utils/hooks/useDrag';

const ProfilesSection: React.FC = () => {
  const {
    users,
    overId,
    isDragging,
    handleInsert,
    handleRemove,
    handleMove,
    onDragEnd,
    onDragStart,
    onDragOver,
  } = UseSelectedSection();
  const styles = useStyles({ isDragging });

  const handleEnter = useDragEnterHandler();
  const handleDrop = useDragDropHandler;
  const handleStart = useDragStartHandler;
  const handleEnd = useDragEndHandler(onDragEnd);

  return (
    <SelectedSectionView
      users={users}
      styles={styles}
      overId={overId}
      isDragging={isDragging}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      handleEnter={handleEnter}
      handleDrop={handleDrop}
      handleInsert={handleInsert}
      handleRemove={handleRemove}
      handleStart={handleStart}
      handleEnd={handleEnd}
      handleMove={handleMove}
    />
  );
};

export default ProfilesSection;
