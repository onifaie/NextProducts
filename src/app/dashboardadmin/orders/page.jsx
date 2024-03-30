import Layout from '../layout';

export default function page() {
  return (
    <main className=' container   h-screen mt-4 mx-4'>
      <div className='   bg-slate-300 p-2 rounded-lg px-4 mb-4 '>
        <div className=' grid grid-cols-4 gap-3'>
          <div>
            <form class='max-w-sm mx-auto'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Select an option
              </label>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
          <div>
            <form class='max-w-sm mx-auto'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Select an option
              </label>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
          <div>
            <form class='max-w-sm mx-auto'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Select an option
              </label>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
          <div>
            <form class='max-w-sm mx-auto'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Select an option
              </label>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center h-48 mb-4 rounded  bg-purple-50 dark:bg-gray-800'>
        <p className='text-2xl text-blue-500 dark:text-gray-500'>
          Hero Zero Option
          <svg
            className='w-3.5 h-3.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 18'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M9 1v16M1 9h16'
            />
            <h1 className='text-5xl'> Hero Zero </h1>
          </svg>
        </p>
      </div>
    </main>
  );
}
