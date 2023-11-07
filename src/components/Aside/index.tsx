import { Navigation, Logo } from './subcomponents';

export const Aside = () => {
  return (
    <aside className="flex bg-mainBg flex-col items-center py-6 w-[152px] gap-y-5">
      <Logo />
      <div className="w-full bg-lightPrimary flex items-center justify-center text-white py-2">
        PIPE LMS
      </div>
      <Navigation />
    </aside>
  );
};
