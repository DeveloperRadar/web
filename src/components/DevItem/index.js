import React from "react";
import "./styles.css";

function DevItem({devData}) {
  return (
    <li className="dev-item">
      <header>
        <img src={devData.avatar_url} alt={devData.name} />
        <div className="user-info">
          <strong>{devData.name || devData.github_username}</strong>
          <span>{devData.techs.join(", ")}</span>
        </div>
      </header>
      <p>{devData.bio}</p>
      <a href={`https://github.com/${devData.github_username}`}>Github Profile</a>
    </li>
  );
}

export default DevItem;
