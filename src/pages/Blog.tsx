
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sari-cream-100 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-sari-terracotta-800 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-sari-terracotta-700 max-w-2xl mx-auto">
            Discover articles on organic farming, sustainable practices, and tips for a healthier lifestyle
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-sari-terracotta-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-sari-terracotta-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sari-terracotta-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 text-sari-terracotta-500 hover:text-sari-terracotta-600">
                      Read More &rarr;
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav>
              <ul className="flex items-center space-x-2">
                <li>
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="sm" className="bg-sari-terracotta-500 text-white">
                    1
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
