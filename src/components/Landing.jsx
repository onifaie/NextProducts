import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <div className=' flex gap-10 mt-10' id='Hero'>
      <div className=' font-semibold text-4xl text-green-500 mt-10  space-y-6'>
        Get Your Product{' '}
        <h4 className=' text-blue-600 mt-4'>Tody $Over Pric</h4>
        <p className=' text-2xl text-blue-500 mt-4'>
          {' '}
          when you get Tody shoud ne Discoend{' '}
        </p>
        <Link
          href='/get-more'
          class='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
        >
          Get More
        </Link>
        <Link
          href='/signup'
          class='text-white m-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          Start Free
        </Link>
      </div>
      <div className=' border-spacing-3 shadow-lg rounded-r-lg'>
        <Image src='/images/Hero.svg' width={500} height={550} alt='Hero' />
      </div>
      {/* <LoginForm /> */}
    </div>
  );
};

export default Landing;
