import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Repo from './Repo';
import type { Repository } from '../types/repository';




function Github() {
  const [username] = useState('findross');
  const [perPage] = useState(6);

  const { isLoading, error, data } = useQuery<Repository[]>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&sort=updated&direction=desc`)
        .then(res => res.json())
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred: {error.message}</div>

  console.log(data);

  return (
    <section className="mt-8">
      {/* <div className="grid grid-cols-3 gap-4"> */}
      <div className="flex flex-col lg:grid grid-cols-2 xl:grid-cols-3 gap-4">
        {
          data?.map(repo => <Repo repo={repo} key={repo.html_url} />)
        }
      </div>
    </section>
  )
};

export default Github
