const ButtonCenter = ({ child }: { child: React.ReactElement }) => {
  return (
    <div className={"flex justify-center items-center h-[10vh]"}>{child}</div>
  );
};

export { ButtonCenter };
