// import FormsLogin from "@/components/auth/FormLogin";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
// import Hero from "/images/Hero.svg";

export default function Home() {
  return (
    <>
      <div>
        {/* <div
          id="custom-controls-gallery"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center pt-4">
            <button
              type="button"
              className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg
                  className="rtl:rotate-180 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg
                  className="rtl:rotate-180 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div> */}
      </div>
      <div className=" flex gap-10 mt-10" id="Hero">
        <div className=" font-semibold text-4xl text-green-500 mt-10  space-y-6">
          Get Your Product{" "}
          <h4 className=" text-blue-600 mt-4">Tody $Over Pric</h4>
          <p className=" text-2xl text-blue-500 mt-4">
            {" "}
            when you get Tody shoud ne Discoend{" "}
          </p>
          <button
            type="button"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Get More{" "}
          </button>
          <button
            type="button"
            class="text-white m-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Free
          </button>
        </div>
        <div className=" border-spacing-3 shadow-lg rounded-r-lg">
          <Image src="/images/Hero.svg" width={500} height={550} alt="Hero" />
        </div>
        {/* <LoginForm /> */}
      </div>
    </>
  );
}
