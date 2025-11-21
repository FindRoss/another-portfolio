import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FaGithub } from "react-icons/fa";

interface Repo {
  name: string;
  language: string | null;
  pushed_at: string;
  html_url: string;
}

function Github() {
  const [username] = useState('findross');
  const { isLoading, error, data } = useQuery<Repo[]>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=5`)
        .then(res => res.json())
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred: {error.message}</div>


  console.log('sortedRepos', data);

  return (
    <section className="mt-8">
      <div className="grid grid-cols-3 gap-4">
        {
          data?.map(repo => {
            const { language, name, pushed_at, html_url } = repo;

            return (
              <div className="border-gray-300 p-2 border-2 rounded-md" key={name}>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">{<FaGithub />} {name}</h3>
                {language && (
                  <div className="mt-4 flex items-center gap-2">
                    <div className="text-base/7 font-semibold text-gray-600">Language:</div>
                    <div className="text-base/7 text-gray-900">{language}</div>
                  </div>
                )
                }
                {pushed_at &&
                  <div className="mt-4 flex items-center gap-2">
                    <div className="text-base/7 font-semibold text-gray-600">Pushed at</div>
                    <div className="text-base/7 text-gray-900">{new Date(pushed_at).toLocaleDateString()}</div>
                  </div>
                }

                {html_url && <a href={html_url} className="mt-4 flex text-blue-600 hover:text-blue-700 underline underline-offset-2" target="_blank" rel="noopener noreferrer">View on GitHub</a>}
              </div>
            );
          })
        }
      </div>
    </section>
  )
};

export default Github
