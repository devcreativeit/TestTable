import { clsx } from 'clsx';
import { useState } from 'react';
import SearchGlass from '../../../../../public/Icon.svg';

const sectionsData = ['Frame', 'Material', 'Edge Type', 'Shape'];

export const Header = () => {
  const [selectedSection, setSelectedSection] = useState(sectionsData[0]);

  return (
    <div className="mb-8 h-[13.5%]">
      <div className="flex justify-between mb-5">
        <div className="text-2xl">Database</div>
        <div className="bg-[#0000000F] relative w-[395px] rounded-sm">
          <img className="absolute top-1/2 -translate-y-1/2 left-3" src={SearchGlass} />
          <input placeholder="Search" className="bg-transparent h-full ml-11 outline-none" />
        </div>
        <div className="flex gap-x-3">
          <button className="shadow-md rounded-sm w-12 h-full"></button>
          <button className="shadow-md rounded-sm w-12 h-full"></button>
          <button className="shadow-md rounded-sm bg-lightPrimary text-white py-2 px-3">
            ADD NEW
          </button>
        </div>
      </div>
      <div className="flex border-b-2 border-[#0000001F] uppercase gap-x-2">
        {sectionsData.map((el, idx) => (
          <div
            className={clsx(
              'px-3 pb-2',
              el === selectedSection && 'text-lightPrimary border-b-2 border-lightPrimary'
            )}
            key={idx}
            onClick={() => setSelectedSection(el)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
