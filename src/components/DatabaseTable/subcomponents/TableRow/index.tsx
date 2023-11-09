import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Cell } from '../Cell';

interface Cell {
  id: number;
  isSelected: boolean;
}

interface TableRowProps {
  isDarker?: boolean;
  tableRowData: Cell[];
  selectRow: (rowNum: number, isSelected: boolean) => void;
  rowIdx: number;
  isRowSelected: boolean;
}

export const TableRow = ({
  isDarker,
  tableRowData,
  selectRow,
  rowIdx,
  isRowSelected,
}: TableRowProps) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(isRowSelected);
  }, [isRowSelected]);

  useEffect(() => {
    selectRow(rowIdx, isSelected);
  }, [isSelected, rowIdx, selectRow]);

  return (
    <>
      <div
        className={clsx(
          'flex items-center justify-center border-t-[#0000001F] border-t-2',
          isDarker && 'bg-[#0000000A]',
          isSelected && '!bg-lightPrimary'
        )}
      >
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        />
      </div>
      {tableRowData.map((el, cellIdx) => (
        <Cell key={cellIdx} isDarker={isDarker} isSelected={el.isSelected} />
      ))}
    </>
  );
};
