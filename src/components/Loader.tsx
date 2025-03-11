export const Loader = () => {
  return (
    <div className="flex flex-col bg-black w-full h-64 animate-pulse rounded-xl p-4 gap-4">
      <div className="bg-blue-950/50 w-full h-32 animate-pulse rounded-md" />
      <div className="flex flex-col gap-2">
        <div className="bg-blue-950/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-blue-950/50 w-4/5 h-4 animate-pulse rounded-md" />
        <div className="bg-blue-950/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-blue-950/50 w-2/4 h-4 animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export const LoaderList = () => {
  return (
    <div className="flex flex-col bg-black w-full h-38 animate-pulse rounded-xl p-4 gap-4">
      <div className="flex flex-col gap-2">
        <div className="bg-blue-950/50 w-full h-6 animate-pulse rounded-md" />
        <div className="bg-blue-950/50 w-4/5 h-6 animate-pulse rounded-md" />
        <div className="bg-blue-950/50 w-full h-6 animate-pulse rounded-md" />
        <div className="bg-blue-950/50 w-2/4 h-6 animate-pulse rounded-md" />
      </div>
    </div>
  );
};
