import { getAllPosts, getPostBySlug } from "../../../lib/markdown";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import profilePic from "../../../assets/images/bios/szetyng-sq.png";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <div className="flex justify-center">
      <article className="md:px-20 px-8 max-w-7xl flex flex-col w-full">
        <header className="mb-8 border-b border-gray-300 pb-8">
          <time className="text-sm text-text-subtitle">
            {new Date(post.postedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-2xl font-bold mt-2 mb-3 ">{post.title}</h1>
          {post.subtitle && (
            <p className="text-xl text-text-subtitle">{post.subtitle}</p>
          )}
          {post.author && (
            <div className="mt-4 flex items-center gap-3">
              {post.author.image && (
                // <div className="w-12 h-12 rounded-full bg-gray-200" />
                <img
                  src={profilePic.src}
                  alt="picture of me looking at a map in a cobbled street in italy"
                  className="rounded-full w-10"
                />
              )}
              <div>
                <p className="font-semibold">{post.author.name}</p>
                {post.author.bio && (
                  <p className="text-sm text-text-subtitle">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}
        </header>

        <div>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-bold mt-6 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-bold mt-4 mb-2">{children}</h3>
              ),
              p: ({ children, ...props }) => (
                <p className="mb-4 leading-relaxed text-justify" {...props}>
                  {children}
                </p>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt || ""}
                  className="w-full max-w-3xl mx-auto my-6 rounded-lg"
                />
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="ml-4">{children}</li>,
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-neon-magenta hover:border-b border-dashed border-b-neon-magenta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "";

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    PreTag="div"
                    className="rounded-lg mb-4 text-sm"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-neon-magenta pl-4 italic my-4">
                  {children}
                </blockquote>
              ),
              div: ({ children, ...props }) => (
                <div className="my-6 flex justify-center" {...props}>
                  {children}
                </div>
              ),
              iframe: ({ src, width, height, ...props }) => (
                <iframe
                  src={src}
                  width={width}
                  height={height}
                  className="max-w-full mx-auto"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
