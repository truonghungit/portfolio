export const Footer = () => {
  return (
    <footer className='py-8 px-6 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto text-center'>
        <p className='text-gray-500'>
          © {new Date().getFullYear()} Pham Truong Hung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
