function RestaurantCard({ restaurant }) {
  const info = restaurant.info || {};

  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <img
        className="h-64 w-full object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
        alt={info.name}
      />
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{info.name}</h3>
            <p className="text-sm text-slate-500">{info.areaName}</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            {info.avgRating || "NEW"}
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-600">{info.cuisines?.join(", ")}</p>
      </div>
    </article>
  );
}

export default RestaurantCard;