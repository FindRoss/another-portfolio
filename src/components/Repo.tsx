import type { Repository } from '../types/repository';
import { SiTypescript, SiJavascript, SiPython, SiReact, SiVuedotjs, SiGo, SiRust, SiDotnet, SiPhp, SiRuby, SiSwift } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

interface RepoProps {
  repo: Repository;
}

const languageIcons: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript className="h-5 w-5 text-blue-600" />,
  JavaScript: <SiJavascript className="h-5 w-5 text-yellow-500" />,
  Python: <SiPython className="h-5 w-5 text-blue-400" />,
  React: <SiReact className="h-5 w-5 text-cyan-400" />,
  Vue: <SiVuedotjs className="h-5 w-5 text-green-500" />,
  Go: <SiGo className="h-5 w-5 text-cyan-500" />,
  Rust: <SiRust className="h-5 w-5 text-orange-700" />,
  'C#': <SiDotnet className="h-5 w-5 text-purple-600" />,
  PHP: <SiPhp className="h-5 w-5 text-indigo-600" />,
  Ruby: <SiRuby className="h-5 w-5 text-red-600" />,
  Swift: <SiSwift className="h-5 w-5 text-orange-500" />,
};

const Repo = ({ repo }: RepoProps) => {

  const { language, name, pushed_at, html_url } = repo;

  return (
    <div className="bg-linear-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" key={name}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>

      <div className="space-y-4">
        {language && (
          <div className="flex items-center gap-3">
            {languageIcons[language]}
            <span className="text-sm font-medium text-gray-700">{language}</span>
          </div>
        )}

        {pushed_at && (
          <div className="text-sm text-gray-600">
            Last updated: {new Date(pushed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        )}

        {html_url && (
          <a
            href={html_url}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <FiExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );

}

export default Repo;