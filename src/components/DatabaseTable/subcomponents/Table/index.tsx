import DownloadIcon from '../../../../../public/filters/file_download_FILL0_wght400_GRAD0_opsz48.svg';
import UploadIcon from '../../../../../public/filters/file_upload_FILL0_wght400_GRAD0_opsz48 1.svg';
import FilterIcon from '../../../../../public/filters/FilterListFilled.svg';
import ReplaceIcon from '../../../../../public/filters/find_replace_FILL1_wght400_GRAD0_opsz48 1.svg';
import DensityIcon from '../../../../../public/filters/MenuFilled.svg';
import ColumnsIcon from '../../../../../public/filters/ViewModuleFilled.svg';
import { TableRow } from '../TableRow';

interface FiltrationDataType {
  text: string;
  image: string;
}

const filtrationData: FiltrationDataType[] = [
  {
    text: 'Columns',
    image: ColumnsIcon,
  },
  {
    text: 'Filter',
    image: FilterIcon,
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

const tableHeadingsData = [
  'Customer ID',
  'User Name',
  'First Name',
  'Last Name',
  'Display Name',
  'Status',
  'Primary Email',
  'Secondary Email',
  'ID',
  'Make Available',
];

const entriesAmount = 36;

export const Table = () => {
  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex gap-2">
          {filtrationData.map((el, idx) => (
            <div
              className="border-2 border-lightPrimary rounded-full flex py-1 px-4 gap-1 text-lightPrimary"
              key={idx}
            >
              <img src={el.image} />
              {el.text}
            </div>
          ))}
        </div>
        <div className="text-[#00000099] text-lg">50 out of 52366</div>
      </div>
      <div className="w-full overflow-auto mt-5">
        <div className="grid grid-rows-1 grid-cols-[0.8fr_repeat(10,2fr)]">
          <div className="flex items-center justify-center">
            <input type="checkbox" className="w-4 h-4" />
          </div>
          {tableHeadingsData.map((el, idx) => (
            <div
              className="h-full font-bold whitespace-nowrap pb-2 pl-3 tracking-tighter"
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[0.8fr_repeat(10,2fr)]">
          {new Array(entriesAmount).fill(null).map((_, idx) => (
            <TableRow isDarker={idx % 2 !== 1} />
          ))}
        </div>
      </div>
    </>
  );
};
