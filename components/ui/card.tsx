interface CardProps {
  title?: string;
  content?: React.ReactNode;

  children?: React.ReactNode;
}

export const Card = ({ title, content, children }: CardProps) => {
  return (
    <div className="text-zinc-200 lg:hover:bg-zinc-800 lg:hover:outline outline-zinc-500/50 outline-1 transition-all rounded-lg lg:p-4">
      {title && <div className="text-sm text-zinc-500 mb-2">{title}</div>}

      {content || children}
    </div>
  );
};
