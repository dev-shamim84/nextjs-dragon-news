import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ n }) => {
  const { title, image_url, details, author, rating, total_view, _id } = n;

  return (
    <div className=" rounded-xl shadow bg-white ">
      {/* Author */}
      <div className="flex items-center gap-3 p-4">
        <div className="relative w-10 h-10">
          <Image
            src={author.img}
            alt="author"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h1 className="font-bold text-lg leading-6">{title}</h1>
      </div>

      {/* Image */}
      <div className=" mt-3">
        <Image
          src={image_url}
          height={300}
          width={300}
          alt="news"
          className="object-cover w-full"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600">
          {details.slice(0, 120)}...
          <Link
            href={`/news/${_id}`}
            className="text-orange-500 cursor-pointer ml-1"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="text-gray-700 ml-2 text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          👁 {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
