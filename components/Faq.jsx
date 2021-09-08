import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Is this a real company?",
    answer:
      <>
        No.
      </>
  },
  {
    question: "Can I still use Shorter?",
    answer:
      <>
        Yes. But there are no guarantees that Shorter or its URLs will live forever.
      </>
  },
  {
    question: "Is it free?",
    answer:
      <>
        Yes, Shorter is free. You might see some "Coming Soon" plans on the pricing page, but there is no intention of building them out. Shorter is just for fun.
      </>
  },
  {
    question: "Do I have to create an account?",
    answer:
      <>
        <p className="pb-2">Yes. The short links you create are kept in your account, so you can edit or delete them as needed.</p>
        <p>When you sign up, you'll be sent a magic link by email. Click that link to sign in.</p>
      </>
  },
  {
    question: "Why didn't I get the magic link to sign in?",
    answer:
      <>
        <p className="pb-2">Check your spam or junk folder.</p>
        <p>Keep in mind, emails like gmail will often prevent you from clicking links in your spam folder. If you got the email, but it doesn't have a clickable link, then try moving the email from spam to your inbox.</p>
      </>
  },
  {
    question: "Can I just sign up with an email and password?",
    answer:
      <>
        No. While this might be something we offer in the future, a magic link is currently the only way to sign up or sign in to Shorter.
      </>
  },
  {
    question: "What's a link shortener?",
    answer:
      <>
        A link shortener is a tool that converts long, hard to read links into shorter links that are easy to read and share.
      </>
  },
  {
    question: "What are the benefits of using a link shortener?",
    answer:
      <>
        Long links are ugly. Don't let your links be ugly.
      </>
  },
  {
    question: "Can I see the source code?",
    answer:
      <>
        Yes. It's on <a className="text-green-500" href="https://github.com/sandypockets/shorter">GitHub</a>.
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
