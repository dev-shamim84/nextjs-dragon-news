import CategoryNews from "@/components/homepage/CategoryNews";
import NewsCard from "@/components/homepage/NewsCard";
import RightSidebar from "@/components/homepage/RightSidebar";
import { getCategory, getCategoryNewsById } from "@/lib/data";

const CategoryNewsPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategory();
  const news = await getCategoryNewsById(id);
  return (
    <div className="container mx-auto grid grid-cols-12 mt-8 gap-5">
      <div className="col-span-3">
        <CategoryNews categories={categories} activeId={id} />
      </div>
      <div className="col-span-6">
        <h2 className="text-xl font-bold">News By Category</h2>
        <div className="space-y-5">
          {news.data.length > 0 ? (
            news.data.map((n) => <NewsCard key={n._id} n={n} />)
          ) : (
            <h2>No data found</h2>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};
export default CategoryNewsPage;
