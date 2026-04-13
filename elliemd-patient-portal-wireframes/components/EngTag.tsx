export function EngTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-sky-100 px-1.5 py-0.5 font-mono text-[10px] font-medium text-sky-900">
      {children}
    </span>
  );
}
