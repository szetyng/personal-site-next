import Link from "next/link";
import { getAllPosts } from "../../lib/markdown";

export const metadata = {
  title: "Blog",
  description: "Sze Tyng Lee's blog posts",
};

const Blog = () => {
  const posts = getAllPosts();

  return (
    <>
      <div className="flex justify-center">
        <div className="md:px-20 px-8 max-w-7xl flex flex-col w-full">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="block group"
              >
                <article className="border-l-4 border-transparent hover:border-apricot hover:pl-3 py-4 transition-all h-full">
                  <time className="text-sm text-text-subtitle">
                    {new Date(post.postedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-bold mt-2 group-hover:text-apricot transition-colors">
                    {post.title}
                  </h2>
                  {post.subtitle && (
                    <p className="text-base text-text-subtitle mt-1 line-clamp-2">
                      {post.subtitle}
                    </p>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
