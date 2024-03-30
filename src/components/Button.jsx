'use client';

const Button = () => {
  return (
    <button
      type='button'
      onClick={() => console.log('Hello')}
      class='text-white m-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
    >
      Start Free
    </button>
  );
};

export default Button;