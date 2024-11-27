
const BlogCard = ({ image, title, date, link , }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full">▶</button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
        <a href={link} className="text-green-600 mt-2 inline-block">
          Continue Reading →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
