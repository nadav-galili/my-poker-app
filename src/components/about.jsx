import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1>
        <u>About us:</u>
      </h1>
      <h2 className="twitch pr-3">Follow us on Twitch to see live games:</h2>
      <img
        src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/blog_article/public/blog/csm-blog/twitch-logo-1138x658.jpg?itok=vOfqsDfZ"
        alt="twitch logo"
        className="twitch-logo mr-2 mb-2"
      ></img>
      <a href="https://www.twitch.tv/pokeratvasili">
        <u>Poker At Vasili On Twitch</u>
      </a>
      <br />
      <a href="https://www.twitch.tv/videos/966912336">
        <u>Sample Video</u>
        <br />
      </a>
      <img
        src={process.env.PUBLIC_URL + `images/twitch.jpg`}
        alt="twitch channel"
        className="twitch-img "
      ></img>
      <div className="font-weight-bold">
        <p className="mt-5 ">
          This site was created by <br />
          Nadav Galili
        </p>
        <p>contact me at:</p>
        <a href="mailto:nadavg1000@gmail.com">nadavg1000@gmail.com</a>
        <p className="mt-3">
          All logos on this site created by <br /> Dan Ben Israel
        </p>
      </div>
    </div>
  );
};

export default About;
