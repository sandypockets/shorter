export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Shorter</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Forget about ugly UTM links. Send your audience a{' '}
            <span className="text-green-600">shorter one.</span>
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Keep your links looking as clean as your content.
          </p>
        </div>
      </div>
    </div>
  )
}
