import Image from 'components/Image';
import Link from 'next/link';
import { trpc } from 'utils/trpc';

export default function CategoriesPreview() {
  const categoryQuery = trpc.useQuery(['category.all']);

  return (
    <div className="bg-white">
      <div className="py-10 sm:py-16 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Courses by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-selective-yellow-700 antialiased drop-shadow-sm hover:text-valley-yellow-600 sm:block"
          >
            See all courses<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categoryQuery.data?.map((category) => (
                  <Link key={category.id} href={`/Courses/${category.name}`}>
                    <a className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                      <span aria-hidden="true" className="absolute inset-0">
                        <div className="h-full w-full object-cover object-center">
                          <Image
                            layout="fill"
                            src={category.thumbnail}
                            alt={category.name}
                          />
                        </div>
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {category.name}
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
