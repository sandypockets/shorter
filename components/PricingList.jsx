import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'Personal',
      price: 0,
      frequency: '/month',
      description: 'Free forever. Share links without hassle.',
      features: [
        'Create up to 100 short links',
        'Unlimited link clicks',
        'Redirect any link',
      ],
      cta: 'Sign up FREE',
      mostPopular: false,
    },
    {
      title: 'Content Creator',
      price: 4,
      frequency: '/month',
      description: "A link shortener that keeps up with your creativity.",
      features: [
        'Everything from Personal plan',
        'Up to 1000 short links',
        'Analytics',
        'Customizable short links',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Professional',
      price: 19,
      frequency: '/month',
      description: 'For full time creators and marketers.',
      features: [
        'Everything in Content Creator plan',
        'Unlimited short links',
        'Advanced analytics',
        'Bulk link shortening',
        'UTM builder',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingList() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Pricing plans for projects of all sizes
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-green-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Coming soon
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/signup"
              className={classNames(
                tier.mostPopular
                  ? 'bg-green-50 text-green-700 hover:bg-green-100'
                  : 'bg-green-500 text-white hover:bg-green-600',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
