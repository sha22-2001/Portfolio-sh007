import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Header() {
  const cursorRef = useRef(null);
  const [photoSize, setPhotoSize] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setPhotoSize(true);
      } else {
        setPhotoSize(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app__header app__flex container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Shayan</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Windows Application</p>
            <p className="p-text">GRAPHIC DESIGNER</p>
            <p className="p-text">Web Developer</p>
            <p className="p-text">AI/ML</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img "
      >
        {photoSize ? (
          <img src={images.GodPhone} alt="profile_bg" className="God" />
        ) : (
          <img src={images.God} alt="profile_bg" className="God" />
        )}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.cpp, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
      
      <div className="cursor" ref={cursorRef}></div>


    </div>
  )
}

export default AppWrap(Header, 'home');