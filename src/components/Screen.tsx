const Screen = ({ children }: { children: React.ReactElement[] }) => {
  return (
    <div className={"min-h-screen bg-primary-color flex flex-col"}>
      {children}
    </div>
  );
};

export { Screen };
