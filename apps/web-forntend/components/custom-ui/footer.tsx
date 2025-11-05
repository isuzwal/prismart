import React from "react";
import { Github, Twitter } from "lucide-react";

export default function FooterPage() {
  return (
    <footer className="text-neutral-500">
      
      <div className="max-w-screen-lg mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm font-medium">
          &copy; {new Date().getFullYear()} uzwal. All rights reserved.
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-2  cursor-pointer transition duration-300 gap-2   text-shadow border dark:bg-neutral-900/80 dark:border-neutral-900/80  bg-secondary border-secondary  px-3 py-1.5 rounded-md">
          <a href="https://twitter.com/isuzwal" aria-label="Twitter" target="_blank" className="">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="dark:text-neutral-100 text-black">
              <path
                fill="currentColor"
                d="M1 3h1V2h2V1H0v1h1Zm-1 9h1v-1H0Zm1-1h1v-1H1Zm1-1h1V9H2Zm1-1h1V8H3Zm3 2h1V9H6ZM5 9h1V8H5ZM4 8h1V6H4ZM3 6h1V5H3Zm4 6h4v-1h-1v-1H9v1H7ZM2 5h1V3H2Zm6 5h1V8H8ZM7 8h1V7H7ZM6 7h1V5H6ZM5 5h1V4H5ZM4 4h1V2H4Zm3 1h1V4H7Zm1-1h1V3H8Zm1-1h1V2H9Zm1-1h1V1h-1Zm0 0"
              />
            </svg>
          </a>
          <a
            href="https://github.com/isuzwal"
            aria-label="GitHub"
            target="_blank"
            className=" transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 432 416" className="text-black dark:text-neutral-100">
              <path
                fill="currentColor"
                d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
