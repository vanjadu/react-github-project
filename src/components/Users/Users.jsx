import React, { useState, useEffect } from 'react';
import './Users.scss';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Users = ({ userInput, setRepos }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();

    // Async fetch
    async function getData() {
      const response = await fetch(
        `http://api.github.com/search/users?q=${userInput}&per_page=6`
      );
      const data = await response.json();

      const jsonData = JSON.parse(JSON.stringify(data['items']));
      setUsers(jsonData);
    }
  }, [userInput]);

  return (
    <div className="users">
      {users && (
        <div className="users__user">
          {users.map((user, key) => (
            <div
              className="users__card"
              key={key}
              onClick={setRepos(user.login)}
            >
              <img
                src={user.avatar_url}
                alt="user avatar"
                className="users__image"
              />
              <h1 className="users__title">{user.login}</h1>
              <Link to="/repositories" className="users__btn">
                  View repositories
                  <FaArrowRight className="users__btn-icon" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
