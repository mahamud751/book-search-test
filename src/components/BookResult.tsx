import Image from "next/image";

interface Book {
  key: string;
  title: string;
  author_name?: string[];
}

interface BookResultProps {
  book: Book;
}

export default function BookResult({ book }: BookResultProps) {
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <Image
        src={
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg"
        }
        alt={book.title}
        width={150}
        height={200}
        className="w-full h-auto rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-black">{book.title}</h2>
      {book.author_name && (
        <p className="text-gray-600">by {book.author_name.join(", ")}</p>
      )}
    </div>
  );
}
