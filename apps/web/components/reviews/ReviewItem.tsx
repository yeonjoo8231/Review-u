import Link from "next/link";
import { review } from "../../app/reviews/page";
import ReviewActions from "./ReviewActions";

export default function ReviewItem({
  id,
  username,
  score,
  image,
  title,
  createAt,
  contents,
  tags,
  likes,
  link,
}: review) {
  return (
    <div className="flex flex-col justify-between gap-10">
      <div>
        <div className="flex justify-between">
          <div>{username}</div>
          <div>{score}</div>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{createAt}</p>
        </div>
        <div>{contents}</div>
      </div>
      <div>
        <div>
          {tags.map((tag, i) => (
            <Link key={i} href={"/"}>
              tag
            </Link>
          ))}
        </div>
        <ReviewActions initialLikes={likes} link={link} reviewId={id} />
      </div>
    </div>
  );
}
