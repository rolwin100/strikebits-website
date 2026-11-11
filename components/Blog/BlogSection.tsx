import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { posts } from "@/data/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export default function BlogSection() {
  return (
    <section id="blog" className="section bg-mist">
      <div className="wrap">
        {/* Header */}
        <Reveal blur={6} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="tag">From the blog</span>
            <h2 className="heading max-w-xl text-balance">Shopify insights &amp; guides</h2>
          </div>
          <Link href="/blog" className="btn btn-line self-start md:self-auto">
            View all posts <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        {/* Posts */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => {
            const CoverIcon = post.cover.icon;
            return (
              <Reveal key={post.slug} delay={0.1 + i * 0.1} y={32} blur={6} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-card bg-white">
                  {/* Cover (replace with an <Image> once posts have images) */}
                  <div className={`${post.cover.color} relative grid aspect-[16/9] place-items-center overflow-hidden`}>
                    <div className="dots absolute inset-0 opacity-40" />
                    <CoverIcon className="relative size-14 text-pine-900/25" strokeWidth={1.5} />
                    <span className="absolute top-4 left-4 rounded-pill bg-white/85 px-3 py-1 text-xs font-medium text-pine-800 backdrop-blur">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm text-ink-muted">
                      <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
                    </p>
                    <h3 className="mt-3 text-xl leading-snug transition group-hover:text-pine-600">
                      {/* Stretched link: makes the whole card clickable */}
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-ink-soft">{post.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-pine-700">
                      Read more
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
