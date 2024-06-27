import React from 'react';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <About />
      </main>
      <footer>
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
