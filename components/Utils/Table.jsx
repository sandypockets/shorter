import Link from 'next/link'
import {useState} from "react";

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

  const [isCopied, setIsCopied] = useState(false)
  const [copyText, setCopyText] = useState(null)

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

  const handleCopy = (urlToCopy) => {
    setCopyText(urlToCopy)
    navigator.clipboard.writeText(urlToCopy)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col w-full w-11/12 sm:w-3/4 lg:w-2/3 mx-auto">
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
                  Copy
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

                    <Link href={`/${url['short_url']}`}>
                      <a className="hover:text-gray-800">
                        {`shorter.one/${url['short_url']}`}
                      </a>
                    </Link>



                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 flex">
                    <button
                      onClick={() => {handleCopy(`shorter.one/${url['short_url']}`)}}
                      className="px-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>


                      <span className="w-16">
                    {isCopied && copyText === `shorter.one/${url['short_url']}` &&
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        Copied!
                      </span>
                    }
                      </span>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs overflow-auto">
                    <Link href={`${url['short_url']}`}>
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
