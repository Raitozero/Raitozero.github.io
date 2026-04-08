import React from 'react';
import Link from 'next/link';
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { Calendar, User, ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-700 transition-colors">
          <ChevronLeft className="mr-1" size={16} /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {postData.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            {postData.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2 font-medium">
              <User size={18} className="text-blue-600" />
              <span>{postData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              <span>{postData.date}</span>
            </div>
          </div>
        </header>
        
        <div 
          className="prose prose-lg prose-blue max-w-none prose-headings:text-blue-900 prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />
        
        <footer className="mt-16 pt-12 border-t border-gray-100">
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Enjoyed this article?</h3>
            <p className="text-gray-600 mb-6">Stay updated with more insights on software engineering and modern technology trends.</p>
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Back to Blog
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
