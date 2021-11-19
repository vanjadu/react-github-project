import { useEffect, useState } from 'react';
import './Repositories.scss';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Repositories({ repos }) {
  const [theRepos, setTheRepos] = useState([]);

  useEffect(() => {
    getRepo();

    // Async fetch
    async function getRepo() {
      const response = await fetch(
        `http://api.github.com/users/${repos}/repos`
      );
      const data = await response.json();

      const repoData = JSON.parse(JSON.stringify(data));
      setTheRepos(repoData);
    }
  }, [repos]);

  return (
    <div className="repos">
      <Link to="/" className="repos__back">
        <FaArrowLeft className="repos__back-icon" />
        Back to home
      </Link>
      {theRepos && (
        <div className="repos__list">
          {theRepos.map((repo, id) => (
            <div className="repos__single" key={id}>
              <p className="repos__title">{repo.name}</p>
              <div className="repos__stats">
                <p className="repos__star">
                  Stargazers: {repo.stargazers_count}
                </p>
                <p className="repos__watch">Watchers: {repo.watchers_count}</p>
                <p className="repos__fork">Fork count: {repo.forks_count}</p>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="repos__link"
              >
                View more
                <FaArrowRight className="repos__link-icon" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
