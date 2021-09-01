import Link from 'next/link'

export default function Table(
  {
    urlsList,
    setUrlId,
    open,
    setOpen,
    setShortUrl,
    setCurrentLongUrl,
    setShowModal
  }
  ) {

  const handleEditClick = (id, short, long) => {
    setUrlId(id)
    setCurrentLongUrl(long)
    setShortUrl(short)
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const handleDeleteClick = (shortUrl) => {
    setUrlId(shortUrl)
    setShowModal(true)
  }

  urlsList.sort(function(a, b) {
    return a.id - b.id
  })

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Shorter one
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Long URL
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created At
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody>
              {urlsList.map((url, urlIdx) => (
                <tr key={urlIdx} className={urlIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                    <Link href={`/urls/${url['short_url']}`}>
                      <a className="hover:text-gray-800">
                        {`shorter.one/urls/${url['short_url']}`}
                      </a>
                  </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href={`/urls/${url['short_url']}`}>
                      <a className="hover:text-gray-800">
                        {url['long_url']}
                      </a>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{url['created_at']}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      type="button"
                      className="mx-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      onClick={() => handleEditClick(url['id'], url['short_url'], url['long_url'])}
                    >
                      <a href="#" className="text-white-600">
                        Edit
                      </a>
                    </button>
                    <button
                      type="button"
                      className="mx-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={() => handleDeleteClick(url['short_url'])}
                    >
                      <a href="#" className="text-white-600">
                        Delete
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
