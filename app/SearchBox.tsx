'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between max-w-6xl mx-auto"
    >
      <input
        type="text"
        value={input}
        placeholder="Search Keywords..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full text-gray-500 placeholder-gray-500 bg-transparent rounded-sm outline-none h-14 dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
