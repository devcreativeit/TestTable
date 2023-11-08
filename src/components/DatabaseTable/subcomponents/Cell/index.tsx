import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface CellProps {
  isDarker?: boolean;
  isSelected?: boolean;
}

export const Cell = ({ isDarker, isSelected }: CellProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState('Cell');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div
      onClick={() => setIsEdit(!isEdit)}
      className={clsx(
        'border-t-[#0000001F] border-t-2 w-36',
        isDarker && 'bg-[#0000000A]',
        isSelected && '!bg-lightPrimary !text-white'
      )}
    >
      {isEdit ? (
        <input
          ref={inputRef}
          className="w-full h-full bg-transparent pl-3 py-[0.19rem] inline outline-lightPrimary"
          placeholder="Editable"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div className="pl-3 w-full h-full py-[0.19rem]">{text}</div>
      )}
    </div>
  );
};
