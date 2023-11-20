const Screen = ({ children }: { children: React.ReactElement[] }) => {
  return (
    <div
      className={
        "min-w-full max-w-full min-h-screen max-h-screen overflow-hidden bg-primary-color flex flex-col"
      }
    >
      {children}
    </div>
  );
};

export { Screen };
