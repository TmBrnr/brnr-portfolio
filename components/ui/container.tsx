export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 mx-auto items-center justify-center max-w-[90%] sm:max-w-6xl py-10">
      {children}
    </div>
  );
};
