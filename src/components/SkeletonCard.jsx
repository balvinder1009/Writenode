import Skeleton from "react-loading-skeleton";

export const SkeletonCard = () => {
  return (
    <div className="card">
      <p className="title">{<Skeleton width={370} />}</p>
      <p className="description">{<Skeleton count={3} />}</p>
      <p className="control">
        <span className="author">{<Skeleton width={70} />}</span>
      </p>
    </div>
  );
};
