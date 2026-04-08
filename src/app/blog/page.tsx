import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">Thoughts and insights on software engineering, cloud architecture, and modern technology trends.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-4 border-t border-gray-50 bg-gray-50/50 group-hover:bg-blue-50 transition-colors">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
