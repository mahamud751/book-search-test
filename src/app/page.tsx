"use client";

import { useState } from "react";

import BookResult from "@/components/BookResult";
import LoadingSpinner from "@/components/LoadingSpinner";
import SearchInput from "@/components/SearchInput";

interface Book {
  key: string;
  title: string;
  author_name?: string[];
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastQuery, setLastQuery] = useState<string>("");
  const booksPerPage = 20;

  const handleSearch = async (query: string, page: number = 1) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setBooks([]);
    setLastQuery(query);
    setCurrentPage(page);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          query
        )}&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setBooks(data.docs.slice(0, booksPerPage));
      const totalResults = data.numFound || 0;
      setTotalPages(Math.ceil(totalResults / booksPerPage));
    } catch (err) {
      setError(
        ` ${err}An error occurred while fetching books. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || loading) return;
    handleSearch(lastQuery, page);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Book Search</h1>
      <SearchInput onSearch={(query) => handleSearch(query, 1)} />
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && books.length === 0 && !error && (
        <p className="text-center text-gray-500">
          No results found. Try a different search.
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookResult key={book.key} book={book} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-700 transition-colors duration-200"
          >
            Previous
          </button>
          <span className=" font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-700 transition-colors duration-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
