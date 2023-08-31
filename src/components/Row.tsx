const Row = ({ childrens }: { childrens: React.ReactElement[] }) => (
  <div className="flex flex-row justify-start gap-x-[50px]">{childrens}</div>
);

export { Row };
