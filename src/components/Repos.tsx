import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Repo from './Repo';
import { getUserRepos } from '../api/getUserRepos'
import type { Repository } from '../types/repository';

function Repos() {
  const [username, setUsername] = useState('findross');
  const [inputValue, setInputValue] = useState('');
  const [perPage] = useState(6);

  const { data, isLoading, error } = useQuery<Repository[]>({
    queryKey: ['repos', username],
    queryFn: () => getUserRepos(username, perPage)
  });


  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred: {error.message}</div>

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue === "") return;
    setUsername(inputValue)

  }

  return (
    <section className="mt-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          required
          type="text"
          placeholder="Search for your own repository on Github.com"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Search
        </button>
      </form>
      <div className="flex flex-col lg:grid grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {
          data?.map(repo => <Repo repo={repo} key={repo.html_url} />)
        }
      </div>
    </section>
  )
};

export default Repos
