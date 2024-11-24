import BlogCard from "./BlogCard";



const blogs = [
  {
    image: "/assets/health.jpg",
    title: "Is Your Diet Hurting You? Common Nutrition Myths Debunked",
    date: "November 4, 2024",
    link: "/blog/1",
  },
  {
    image: "/assets/healthedu.jpg",
    title: "The Truth About Sugar: What Every Health-Conscious Person Should Know",
    date: "October 31, 2024",
    link: "/blog/2",
  },
  {
    image: "/assets/healthservice.png",
    title: "Why Sleep Is the Secret Ingredient to Your Wellness Routine",
    date: "October 8, 2024",
    link: "/blog/3",
  },
  {
    image: "/assets/counseling.jpg",
    title: "How to Beat Stress: 7 Science-Backed Techniques That Work",
    date: "October 8, 2024",
    link: "/blog/4",
  },
  {
    image: "/assets/eduPromotion.jpg",
    title: "Top 5 Superfoods for Boosting Your Energy Naturally",
    date: "October 8, 2024",
    link: "/blog/5",
  },
  {
    image: "/assets/healthservice.jpg",
    title: "The Ultimate Guide to Staying Fit with Just 15 Minutes a Day",
    date: "October 8, 2024",
    link: "/blog/6",
  },
  {
    image: "/images/contact-image.jpg",
    title: "10 Surprising Benefits of Drinking Water You Didn’t Know About",
    date: "October 8, 2024",
    link: "/blog/7",
  },
];

const BlogFeed = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Check our latest Blog here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogFeed;
