import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Features', href: '/features' },
    { name: 'Create short link', href: '/create-new-url' },
    { name: 'My short links', href: 'your-urls' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item, index) => (
            <div key={index} className="px-5 py-2">
              <Link href={item.href}>
              <a className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Shortn, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
