"use client";

interface ReviewActionProps {
  initialLikes: number;
  link: string;
  reviewId: number;
}

export default function ReviewActions({
  initialLikes,
  link,
  reviewId,
}: ReviewActionProps) {
  const handleClikLike = () => {};
  const handleClikShare = () => {};

  return (
    <div className="flex justify-between">
      <div onClick={handleClikLike}>
        도움돼요
        {initialLikes}
      </div>
      <div className="flex gap-2">
        <div>링크</div>
        <div onClick={handleClikShare}>공유</div>
      </div>
    </div>
  );
}
