import Link from "next/link";

const CategoryNews = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="my-2 font-bold text-xl">All Category</h2>
      <div>
        {categories.data.news_category.map((category) => (
          <div className="space-y-4" key={category.category_id}>
            <Link href={`/category/${category.category_id}`}>
              <button
                className={`${
                  activeId === category.category_id && "bg-slate-300"
                } btn btn-soft w-full my-2`}
              >
                {category.category_name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
