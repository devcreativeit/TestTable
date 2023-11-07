import { clsx } from 'clsx';
import { useState } from 'react';
import { Cell } from '../Cell';

interface TableRowProps {
  isDarker?: boolean;
  selectedCol: number | null;
}

export const TableRow = ({ isDarker, selectedCol }: TableRowProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div
        className={clsx(
          'flex items-center justify-center border-t-[#0000001F] border-t-2',
          isDarker && 'bg-[#0000000A]',
          isSelected && '!bg-lightPrimary'
        )}
      >
        <input type="checkbox" className="w-4 h-4" onChange={() => setIsSelected(!isSelected)} />
      </div>
      {new Array(10).fill(null).map((_, cellIdx) => (
        <Cell
          key={cellIdx}
          isDarker={isDarker}
          isSelected={isSelected || cellIdx === selectedCol}
        />
      ))}
    </>
  );
};
