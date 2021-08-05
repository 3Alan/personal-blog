import Link from 'next/link';
import { useState, FC } from 'react';

const Search: FC = () => {
  const [key, setKey] = useState('');
  const [list, setList] = useState([]);
  const onSearch = async () => {
    const res = await fetch(`/api/search?key=${key}`);
    const data = await res.json();
    setList(data.result);
  };
  return (
    <div>
      <input className="bg-gray-200" type="text" value={key} onChange={(e) => setKey(e.target.value)} />
      <button className="bg-blue-400 rounded-sm text-white" onClick={onSearch}>
        search
      </button>

      <ul>
        {list.map((item) => (
          <li key={item.slug}>
            <Link as={`/posts/${item.slug}`} href="/posts/[slug]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
