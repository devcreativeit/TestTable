import { clsx } from 'clsx';
import { useState } from 'react';

interface CellProps {
  isDarker?: boolean;
  isSelected?: boolean;
}

export const Cell = ({ isDarker, isSelected }: CellProps) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div
      onClick={() => setIsEdit(!isEdit)}
      className={clsx(
        isDarker && 'bg-[#0000000A]',
        'border-t-[#0000001F] border-t-2',
        isSelected && '!bg-lightPrimary !text-white'
      )}
    >
      {isEdit ? (
        <input
          className="w-full h-full bg-transparent pl-3 py-[0.19rem] border-lightPrimary border-2"
          placeholder="Editable"
        />
      ) : (
        <div className="pl-3 w-full h-full py-[0.19rem]">Cell</div>
      )}
    </div>
  );
};
