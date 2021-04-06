import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1>About us:</h1>;
      <h2 className="twitch pr-3">Follow us on Twitch to see live games:</h2>
      <a href="https://www.twitch.tv/pokeratvasili">
        Poker At Vasili On Twitch
      </a>
      <img
        src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/blog_article/public/blog/csm-blog/twitch-logo-1138x658.jpg?itok=vOfqsDfZ"
        alt="twitch logo"
        className="twitch-logo"
      ></img>
      <p></p>
    </div>
  );
};

export default About;
