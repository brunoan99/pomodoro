const Screen = ({ child }: { child: React.ReactElement }) => {
  return <div className={"min-h-screen bg-primary-color"}>{child}</div>;
};

export { Screen };
