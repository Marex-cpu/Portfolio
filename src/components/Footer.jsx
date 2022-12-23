import React from 'react';

import '../styles/Footer.scss';

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <h2>Marko Petrović</h2>
      <small>&copy; Marko Petrović {date.getFullYear()}. All right reserved.</small>
    </footer>
  )
}

export default Footer