// page.tsx

import { useRouter } from 'next/navigation'; // Import from next/navigation
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Define your existing page content */}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      {/* Define your about page content */}
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      {/* Define your contact page content */}
    </div>
  );
};

// Render different components based on the route
const Page: React.FC = () => {
  const router = useRouter(); // Use useRouter from next/navigation
  const path = router.pathname;

  switch (path) {
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
};

export default Page;
