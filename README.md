Book Search Application
A Next.js web application that allows users to search for books using the Open Library API. The app features a clean, responsive UI with pagination, beautiful card-based results, and error handling.
Features

Search Functionality: Search for books by title, author, or keyword.
Responsive Design: Displays results in responsive.
Pagination: Navigate through search results with Previous/Next buttons, showing 4 books per page.
Beautiful Cards: Book results are presented in styled cards with hover effects and truncated text for readability.
Error Handling: Displays user-friendly messages for API errors or no results.
Loading State: Shows a spinner during API requests.
TypeScript: Type-safe code for better maintainability.

Tech Stack

Framework: Next.js (App Router) 15.3.1.
Language: TypeScript
Styling: Tailwind CSS
API: Open Library API
Deployment: Vercel
Version Control: Git/GitHub

Prerequisites

Node.js (v16 or higher)
npm (v7 or higher)
Git
A GitHub account
VPS Server

Setup Instructions

Clone the Repository:
git clone https://github.com/YOUR_USERNAME/book-search-app.git
cd book-search-app

Install Dependencies:
npm install

Run the Development Server:
npm run dev

Open http://localhost:3042 in your browser to view the app.

Usage

Enter a search query (e.g., "Harry Potter") in the input field and click "Search".
View results displayed as cards, showing book titles Raft authors.
Use the "Previous" and "Next" buttons to navigate through pages of results.
If no results are found or an error occurs, a message will be displayed.

Deployment
Deploy to VPS Server

Push to GitHub:
git add .
git commit -m "Initial commit"
git push origin main

Deploy the application.

Access the Deployed App:
Vercel will provide a public URL (e.g., https://book-search-app.vercel.app).

Submission Details

GitHub Repository: https://github.com/YOUR_USERNAME/book-search-app
Vercel URL: https://book-search-app.vercel.app (replace with your actual URL)

API Details
The app uses the Open Library Search API:

Endpoint: https://openlibrary.org/search.json?q={query}&page={page}
No API key required for basic search.
Returns book data including title, author, and more.
Pagination is supported via the page parameter.

License
This project is licensed under the MIT License.
