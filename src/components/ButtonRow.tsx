const ButtonRow = ({ children }: { children: React.ReactElement[] }) => {
  return (
    <div
      className={
        "flex flex-row justify-center items-center h-[10vh] gap-x-[50px]"
      }
    >
      {children}
    </div>
  );
};

export { ButtonRow };
