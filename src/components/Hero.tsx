import { FaGithubSquare } from "react-icons/fa"

function Hero() {
  return (
    <div className="relative bg-linear-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-8 lg:text-center">
          <div className="flex items-center justify-center gap-2 lg:justify-center">
            <FaGithubSquare className="h-5 w-5 text-indigo-600" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-600">GitHub Repositories</h2>
          </div>
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              See everything I am building
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-8">
            View my repositories on GitHub or instead search for your own GitHub repo with your username, and view your own.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
