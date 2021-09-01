import { PlusIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function EmptyUrls() {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-medium text-gray-900">Hmmm, nothing here yet.</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new short URL.</p>
      <div className="mt-6">
        <Link href={'/create-new-url'}>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Create short URL
          </button>
        </Link>
      </div>
    </div>
  )
}
