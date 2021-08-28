import Avatar from "../Account/Avatar";

export default function ProfileForm({ userData, setUserData, loading, updateProfile }) {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                {/*<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">*/}
                {/*  shorter.one/*/}
                {/*</span>*/}
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  value={userData.username}
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  onChange={(e) => setUserData(prev => ({ ...prev, username: e.target.value }))}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <Avatar
                url={userData['avatar_url']}
                size={150}
                onUpload={(url) => {
                  setUserData(prev => ({ ...prev, "avatar_url": url }))
                  updateProfile({ userData })
                }}
                userData={userData}
                setUserData={setUserData}
              />
            </div>


          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-500">Used for login. Not publicly visible on your profile.</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={userData['first_name']}
                  placeholder="Nate"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setUserData(prev => ({ ...prev, "first_name": e.target.value }))}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={userData['last_name']}
                  placeholder="Nickerson"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setUserData(prev => ({ ...prev, "last_name": e.target.value }))}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={userData.email}
                  placeholder="n.nickerson@gmail.com"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => updateProfile({ userData })}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  )
}
