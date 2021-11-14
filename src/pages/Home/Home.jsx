import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Users from '../../components/Users/Users';
import './Home.scss';

export default function Home({ setRepos }) {
  const [userInput, setUserInput] = useState();

  return (
    <div className="home">
      <SearchBar setUserInput={setUserInput} />
      <Users userInput={userInput} setRepos={setRepos} />
    </div>
  );
}
