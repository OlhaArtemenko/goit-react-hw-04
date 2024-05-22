import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
