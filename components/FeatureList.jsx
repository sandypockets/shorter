import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Free',
    description: 'Create as many links as you want. Shortn is completely free.',
  },
  {
    name: 'Link list',
    description: 'Login and view all the short links you\'ve created with your account.',
  },
  {
    name: 'No expiry',
    description: 'Shortn links never expire or time out, so you can share them with your clients confidently.',
  },
  {
    name: 'Easy',
    description: 'Create a short link in your account. Then start using it right away.',
  },
  {
    name: 'Mobile friendly',
    description: 'Whether you\'re at your desk or on the go, create Shortn links from anywhere.',
  },
  {
    name: 'Reporting',
    description: 'Learn how frequently your links are getting clicked.',
  },
  {
    name: 'Edit links',
    description: 'Need to edit the URL? No problem. You can adjust your short links any time.',
  },
  {
    name: 'Minimal data collected',
    description: 'Our sign up form asks for an email. That\'s it. We value privacy.',
  },
]

export default function FeatureList() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">The only link shortener you'll ever need</h2>

        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
