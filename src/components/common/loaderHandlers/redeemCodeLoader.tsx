export default function RedeemCodeLoader() {
  return (
    <div className="container mx-auto p-4">
      <div className="animate-pulse">
        <div className="h-6 bg-slate-700 rounded w-1/4 mb-6" />
      </div>

      <div className="animate-pulse space-y-2">
        <div className="h-4 bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-700 rounded w-5/6" />
        <div className="h-4 bg-slate-700 rounded w-4/6" />
      </div>
    </div>
  );
}
