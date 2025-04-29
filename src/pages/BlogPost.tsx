
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");
  
  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-display text-sari-terracotta-800 mb-4">Article Not Found</h1>
          <p className="mb-8 text-sari-terracotta-600">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-terracotta-500 hover:bg-sari-terracotta-600 transition"
          >
            Return to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = getRelatedPosts(post.id);

  return (
    <Layout>
      <article className="bg-white py-10">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <div className="flex items-center text-sm text-sari-terracotta-500">
              <Link to="/blog" className="hover:text-sari-terracotta-700 flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </div>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-sari-terracotta-500 mb-3">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-sari-terracotta-800 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-sari-terracotta-800">
                  {post.author.name}
                </p>
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="aspect-[21/9] w-full rounded-lg overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-sari-terracotta-800 prose-headings:font-display prose-a:text-sari-terracotta-600 hover:prose-a:text-sari-terracotta-800 prose-p:text-sari-terracotta-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 border-t border-b border-sari-cream-200 py-6">
              <div className="flex items-start flex-wrap gap-2">
                <Tag className="h-5 w-5 text-sari-terracotta-500 mt-0.5 mr-1" />
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    to={`/blog/tag/${tag.replace(/\s+/g, '-')}`}
                    className="bg-sari-cream-100 text-sari-terracotta-600 px-3 py-1 rounded-full text-sm hover:bg-sari-terracotta-100 hover:text-sari-terracotta-700 transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author Box */}
            <div className="mt-12 bg-sari-cream-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <p className="font-medium text-lg text-sari-terracotta-800">
                    {post.author.name}
                  </p>
                  <p className="text-sari-terracotta-600">
                    Writer & Organic Farming Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-sari-terracotta-500 mb-2">
                        <span>{relatedPost.date}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-sari-terracotta-800 mb-2">
                        {relatedPost.title}
                      </h3>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="link" className="p-0 text-sari-terracotta-500 hover:text-sari-terracotta-600">
                          Read More &rarr;
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
