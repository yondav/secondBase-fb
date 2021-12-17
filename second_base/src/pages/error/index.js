import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <header>
        <h1>Restricted Action</h1>
      </header>
      <main>
        <p>
          You may be getting redirected here for trying to execute an action
          that is not permitted by your authentication status or if you've tried
          to create an account you weren't permitted to create.
        </p>
        <p>
          If that doesn't sound right, the page you're looking for simply does
          not exist.
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
