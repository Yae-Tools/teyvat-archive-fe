export default function PageLoader() {
  return (
    <div className="container mx-auto p-4">
      <div className="animate-pulse">
        <div className="mb-4 h-6 w-3/4 rounded bg-slate-700" />
      </div>

      <div className="animate-pulse">
        <div className="mb-6 h-6 w-1/4 rounded bg-slate-700" />
      </div>

      <div className="animate-pulse">
        <div className="mb-6 h-64 w-full rounded bg-slate-700" />
      </div>

      <div className="animate-pulse space-y-2">
        <div className="h-4 w-full rounded bg-slate-700" />
        <div className="h-4 w-5/6 rounded bg-slate-700" />
        <div className="h-4 w-4/6 rounded bg-slate-700" />
      </div>
    </div>
  );
}
