import SkipNext from '../../../../../public/SkipNext.svg';

export const SaveArea = () => {
  return (
    <div className="absolute w-[89%] right-0 bottom-0 bg-white shadow-[0px_-2px_5px_0px_#00000033] flex items-center justify-center gap-3 h-[10vh]">
      <button className="border-2 border-lightPrimary rounded-md text-lightPrimary w-[85px] py-[6px] h-fit uppercase">
        Cancel
      </button>
      <button className="border-2 border-lightPrimary rounded-md h-fit uppercase w-[85px] py-[6px] bg-lightPrimary text-white">
        Save
      </button>
      <button className="border-2 border-lightPrimary h-fit uppercase p-4 bg-lightPrimary text-white absolute right-0 bottom-full flex gap-3">
        Next screen
        <img src={SkipNext} />
      </button>
    </div>
  );
};
