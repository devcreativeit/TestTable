interface NavigationDataType {
  text: string;
  link: string;
  sub?: NavigationDataType[];
}

const navigationData: NavigationDataType[] = [
  {
    text: 'Customers',
    link: '/',
  },
  {
    text: 'Database',
    link: '/',
    sub: [
      {
        text: 'Frame',
        link: '/',
      },
      {
        text: 'Lens',
        link: '/',
      },
      {
        text: 'Coatings',
        link: '/',
      },
    ],
  },
  {
    text: 'Mapping',
    link: '/',
  },
  {
    text: 'Users',
    link: '/',
  },
];

export const Navigation = () => {
  return (
    <nav className="flex flex-col w-full px-2 pt-7 gap-y-4">
      {navigationData.map((el, idx) =>
        el.sub?.length ? (
          <div key={idx}>
            <div className="text-black pl-4 font-bold py-1 hover:bg-[#0000000A] relative" key={idx}>
              {el.text}
              <div className="w-2 h-2 border-t-[2px] border-l-[2px] rotate-45 top-1/2 right-6 border-[#0000008A] absolute" />
            </div>
            <div className="flex flex-col mt-3 gap-y-1">
              {el.sub.map((subEl, subIdx) => (
                <div className="text-black pl-8 py-1 hover:bg-[#0000000A]" key={subIdx}>
                  {subEl.text}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-black pl-4 py-1 font-bold hover:bg-[#0000000A]" key={idx}>
            {el.text}
          </div>
        )
      )}
    </nav>
  );
};
