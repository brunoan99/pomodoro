const Title = ({ child }: { child: string }) => {
  return (
    <h1 className="self-center text-2xl text-primary-font-color font-normal select-none">
      {child}
    </h1>
  );
};

export { Title };
