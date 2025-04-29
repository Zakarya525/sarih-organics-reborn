
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container-custom py-20 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-display font-bold text-sari-green-700 mb-4">404</h1>
          <h2 className="text-3xl font-medium text-sari-green-800 mb-6">Page Not Found</h2>
          <p className="text-sari-green-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-green-600 hover:bg-sari-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-green-500 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
