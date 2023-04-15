import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {

  // eslint-disable-next-line no-unused-vars
  function redirectToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/shayan-hore-652650201/";
  }

  // eslint-disable-next-line no-unused-vars
  function redirectTogit() {
    window.location.href = "https://github.com/sha22-2001";
  }

  // eslint-disable-next-line no-unused-vars
  function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/shayanhore/";
  }

  return (
    <div className="app__social">
      <div onClick={redirectToLinkedIn}>
        <BsLinkedin />
      </div>
      <div onClick={redirectTogit}>
        <BsGithub />
      </div>
      <div onClick={redirectToInstagram}>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia;
