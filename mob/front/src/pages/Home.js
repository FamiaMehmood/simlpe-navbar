// import React from 'react';
// import{ Link} from 'react-router-dom';
// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <p>This is a home page</p>
//       <Link to='/about'>go to about </Link>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require('/images/m1.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Welcome to Home Screen!</h1>
      <button onClick={handlePress}>Tap me!</button>
      <p>You've tapped {count} times!</p>
    </div>
  );
};

export default Home;