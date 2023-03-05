import confirm2Icon from '@/assets/icons/confirm-2.svg';
import IconButton from '@/components/IconButton';
import { ProductCategoryType } from '@/global/types';
import useEditProductCategory from '@/hooks/productCategory/useEditProductCategory';
import { useRef } from 'react';

import { Input } from './styles';

interface Props extends ProductCategoryType {
  toggleEditMode: () => void;
}

const EditItem = ({ id, name: oldName, toggleEditMode }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const editProductCategory = useEditProductCategory();

  const handleConfirm = () => {
    const name = inputRef.current?.value || oldName;

    editProductCategory({ id, name, description: 'category' });
    toggleEditMode();
  };

  return (
    <>
      <Input
        ref={inputRef}
        placeholder={oldName}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      />
      <IconButton
        icon={confirm2Icon}
        onClick={handleConfirm}
        styles={{
          display: 'inline-block',
          width: '38px',
          height: '38px',
        }}
        hover={{ backgroundColor: '#e9ecef' }}
      />
    </>
  );
};

export default EditItem;
