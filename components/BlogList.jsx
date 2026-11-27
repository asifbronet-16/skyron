"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";

/**
 * The post cards on /blogs with the topic filters above them. A filter shows
 * only when it has a post; pressing the active one again shows every post.
 */
export default function BlogList({ posts, topics }) {
  const [topic, setTopic] = useState(null);
  const available = topics.filter((t) => posts.some((post) => post.tag === t));
  const shown = topic ? posts.filter((post) => post.tag === topic) : posts;

  return (
    <>
      {available.length > 1 && (
        <ul className="mb-8 flex flex-wrap justify-center gap-3" aria-label="Topics">
          {available.map((t) => (
            <li key={t}>
              <button
                type="button"
                aria-pressed={topic === t}
                onClick={() => setTopic(topic === t ? null : t)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  topic === t
                    ? "border-violet-400/60 bg-violet-500/20 text-white"
                    : "border-white/12 bg-white/4 text-white/70 hover:border-white/25 hover:text-white"
                }`}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((post, i) => (
          <Reveal key={post.slug} delay={Math.min(i, 4) * 90} distance={28} className="h-full">
            <BlogCard
              tag={post.tag}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              href={`/blogs/${post.slug}`}
              index={i}
            />
          </Reveal>
        ))}
      </div>
    </>
  );
}
