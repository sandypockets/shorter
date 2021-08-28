import {Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { supabase } from "../../utils/supabaseClient";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const signedOutNavItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
]

const signedInNavItems = [
    {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Create new URL',
    href: '/create-new-url',
  },
  {
    name: 'Your URLs',
    href: '/your-urls',
  },
]

const handleSignOut = () => {
  supabase.auth.signOut()
}

export default function Navigation({ currentUrl, session, url, userData, setUserData }) {
  let navItems;
  session ? navItems = signedInNavItems : navItems = signedOutNavItems;

  const [loading, setLoading] = useState(true)


  useEffect(() => {
   userData['avatar_url'] && downloadImage(userData['avatar_url'])
  }, [userData['avatar_url']])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setUserData(prev => ({ ...prev, "avatar_url": url }))

    } catch (error) {
      console.log('Error downloading image: ', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Disclosure as="nav" className="bg-white fixed w-screen top-0 z-20">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {navItems.map((item, index) => (
                <div key={index} className={"hidden sm:ml-6 sm:flex sm:space-x-8"}>
                  <Link href={item.href}>
                    <a
                      className={currentUrl === item.href ? "border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                    >
                      {item.name}
                    </a>
                  </Link>
                </div>
                ))}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <span className="sr-only">View notifications</span>
                </button>


                {
                  session ?
                 // Profile dropdown
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      <span className="sr-only">Open user menu</span>

                      {loading ? (
                        <div
                          className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"
                        />
                      ) : (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={userData['avatar_url']}
                          alt=""
                        />
                      )}

                      {/*<img*/}
                      {/*  className="h-8 w-8 rounded-full"*/}
                      {/*  // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                      {/*  src={userData['avatar_url']}*/}
                      {/*  alt=""*/}
                      {/*/>*/}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/account">
                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700')}>
                              Your Profile
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleSignOut}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                    : (
                      <>
                        <Link href="/signin">
                          <a>Sign in</a>
                        </Link>
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </>
                    )

                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {navItems.map((item, index) => (
              <div key={index} className="pt-2 pb-4 space-y-1">
                <Link href={item.href}>
                  <a
                    className={currentUrl === item.href ? "bg-green-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"}
                  >
                    {item.name}
                  </a>
                </Link>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
