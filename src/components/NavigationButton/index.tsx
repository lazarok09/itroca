type BottomNavigationActionProps = {
  label: string;
  icon: JSX.Element;
  handleNavigation: () => void;
  activeIndex: boolean;
};

export const NavigationButton = (props: BottomNavigationActionProps) => {
  const { handleNavigation, icon, label, activeIndex } = props;
  // #68BAF2
  return (
    <button
      onClick={handleNavigation}
      className={`${
        activeIndex ? "text-heavyBlue" : "text-zinc-400 px-4"
      } flex flex-col items-center justify-center`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
