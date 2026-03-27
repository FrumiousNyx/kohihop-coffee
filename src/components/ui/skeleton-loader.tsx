export function ProductSkeleton() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="animate-pulse">
        <div className="flex items-start gap-4">
          {/* Product image skeleton */}
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="h-full w-full bg-white/10" />
          </div>
          
          {/* Product info skeleton */}
          <div className="min-w-0 flex-1">
            <div className="h-4 w-32 bg-white/10 rounded mb-2" />
            <div className="h-3 w-24 bg-white/10 rounded mb-2" />
            <div className="h-3 w-16 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CartSkeleton() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="h-full w-full bg-white/10" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="h-4 w-20 bg-white/10 rounded mb-2" />
              <div className="h-3 w-16 bg-white/10 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
