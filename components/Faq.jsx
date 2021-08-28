import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What's a link shortener?",
    answer:
      <>
        A link shortener is a tool that converts long, hard to read links into short, shorter links that are easy to read.
      </>
  },
  {
    question: "What are the benefits of using a link shortener?",
    answer:
      <>
        Whether you're a marketer, sharing links with UTM tracking, or a casual web surfer sharing links with family and friends, we can all agree on one thing: long links are ugly. Say goodbye to long links. Use a shorter one instead.
      </>
  },
  {
    question: "How much does it cost?",
    answer:
      <>
        Shorter is free. Though, we do have plans to offer more features in paid subscription plans in the future.
      </>
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Questions? We've got answers.</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
