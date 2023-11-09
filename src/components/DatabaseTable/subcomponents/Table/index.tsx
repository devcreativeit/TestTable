import { clsx } from 'clsx';
import { ReactNode, useCallback, useState } from 'react';
import DownloadIcon from '../../../../../public/filters/file_download_FILL0_wght400_GRAD0_opsz48.svg';
import UploadIcon from '../../../../../public/filters/file_upload_FILL0_wght400_GRAD0_opsz48 1.svg';
import FilterIcon from '../../../../../public/filters/FilterListFilled.svg';
import ReplaceIcon from '../../../../../public/filters/find_replace_FILL1_wght400_GRAD0_opsz48 1.svg';
import DensityIcon from '../../../../../public/filters/MenuFilled.svg';
import ColumnsIcon from '../../../../../public/filters/ViewModuleFilled.svg';
import LastNameIcon from '../../../../../public/LastName.svg';
import DisplayNameIcon from '../../../../../public/DisplayName.svg';
import { SaveArea } from '../SaveArea';
import { TableRow } from '../TableRow';

interface FiltrationDataType {
  text: string;
  image: string;
  notifications?: number;
}

const filtrationData: FiltrationDataType[] = [
  {
    text: 'Columns',
    image: ColumnsIcon,
  },
  {
    text: 'Filter',
    image: FilterIcon,
    notifications: 2,
  },
  {
    text: 'Density',
    image: DensityIcon,
  },
  {
    text: 'Replace',
    image: ReplaceIcon,
  },
  {
    text: 'Upload',
    image: UploadIcon,
  },
  {
    text: 'Download',
    image: DownloadIcon,
  },
];

interface TableColsDataType {
  text: string;
  dots?: boolean;
  image?: ReactNode;
}

const tableColsData: TableColsDataType[] = [
  {
    text: 'Customer ID',
    dots: true,
  },
  {
    text: 'User Name',
    dots: true,
  },
  {
    text: 'First Name',
    dots: true,
  },
  {
    text: 'Last Name',
    image: <img src={LastNameIcon} className="h-[80%] my-auto" />,
  },
  {
    text: 'Display Name',
    image: <img src={DisplayNameIcon} className="h-[80%] my-auto" />,
  },
  {
    text: 'Status',
    dots: true,
  },
  {
    text: 'Primary Email',
  },
  {
    text: 'Secondary Email',
  },
  {
    text: 'ID',
  },
  { text: 'Make Available' },
];

const rowsAmount = 15;

export const Table = () => {
  const [selectedCol, setSelectedCol] = useState<number | null>(null);
  const [allSelected, setAllSelected] = useState(false);
  const [tableData, setTableData] = useState(
    new Array(rowsAmount).fill(null).map(() =>
      new Array(tableColsData.length).fill(null).map((_, idx) => ({
        id: idx,
        isSelected: false,
      }))
    )
  );

  const selectAll = (isSelected: boolean) => {
    setTableData(
      tableData.map((row) =>
        row.map((cell) => ({
          id: cell.id,
          isSelected: isSelected,
        }))
      )
    );
    setAllSelected(isSelected);
  };

  const selectRow = useCallback(
    (rowNum: number, isSelected: boolean) => {
      setTableData(
        tableData.map((row, idx) =>
          idx === rowNum
            ? row.map((cell) => ({
                id: cell.id,
                isSelected: isSelected,
              }))
            : row
        )
      );
    },
    [tableData]
  );

  const selectCol = useCallback(
    (selectedCol: number | null) => {
      setTableData(
        tableData.map((row) =>
          row.map((cell, idx) => ({
            id: cell.id,
            isSelected: idx === selectedCol,
          }))
        )
      );
    },
    [tableData]
  );

  return (
    <div>
      <div className="flex items-end justify-between">
        <div className="flex gap-2">
          {filtrationData.map((el, idx) => (
            <button
              className="border-2 border-lightPrimary rounded-full flex py-1 px-4 gap-1 text-lightPrimary"
              key={idx}
            >
              <img src={el.image} />
              {el.text}
              {el.notifications && (
                <div className="rounded-full bg-lightError text-white w-4 h-4 flex items-center justify-center my-auto">
                  {el.notifications}
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="text-[#00000099] text-lg">50 out of 52366</div>
      </div>
      <div className="w-full mt-5 h-[63vh] overflow-auto">
        <div className="grid grid-cols-[0.8fr_repeat(10,2fr)] w-fit overflow-auto h-full">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={(e) => selectAll(e.target.checked)}
            />
          </div>
          {tableColsData.map((el, idx) => (
            <div
              className={clsx(
                'w-full whitespace-nowrap font-bold h-8 pb-2 pl-3 tracking-tighter cursor-pointer flex justify-between',
                idx === selectedCol && '!bg-lightPrimary !text-white'
              )}
              key={idx}
              onClick={() => {
                if (idx === selectedCol) {
                  setSelectedCol(null);
                } else {
                  setSelectedCol(idx);
                  selectCol(idx);
                }
              }}
            >
              {el.text}
              <div className="flex gap-1">
                {el.dots && (
                  <div className="my-auto ml-auto h-4 flex flex-col justify-between">
                    {new Array(3).fill(null).map((_, idx) => (
                      <span className="rounded-full w-1 h-1 bg-[#00000059]" key={idx} />
                    ))}
                  </div>
                )}
                {el.image && el.image}
                {idx !== tableColsData.length - 1 && (
                  <div className="my-auto ml-auto w-[2px] h-4 bg-[#00000059]" />
                )}
              </div>
            </div>
          ))}
          {tableData.map((el, idx) => (
            <TableRow
              isDarker={idx % 2 !== 1}
              tableRowData={el}
              selectRow={selectRow}
              isRowSelected={allSelected}
              rowIdx={idx}
              key={idx}
            />
          ))}
        </div>
      </div>
      <SaveArea />
    </div>
  );
};
