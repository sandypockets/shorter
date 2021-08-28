import {supabase} from "../../utils/supabaseClient";

export default function AccountForm() {
  return (
    <div className="flex justify-center mt-48">
      <div className="flex flex-col p-4 bg-gray-200 w-1/3 rounded-lg">
        <h1 className="flex justify-center text-2xl mb-12">Edit your profile</h1>

        <div className="py-2 flex">
          <label
            className="pr-7"
            htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            id="email"
            type="text"
            value={userData.email || ''}
            onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div className="py-2">
          <label
            className="pr-6"
            htmlFor="username">
            Name
          </label>
          <input
            className="w-full"
            id="username"
            type="text"
            value={userData.username || ''}
            onChange={(e) => setUserData(prev => ({ ...prev, username: e.target.value }))}
          />
        </div>

        <div className="py-2">
          <label
            className="pr-2"
            htmlFor="website">
            Website
          </label>
          <input
            className="w-full"
            id="website"
            type="website"
            value={userData.website || ''}
            onChange={(e) => setUserData(prev => ({ ...prev, website: e.target.value }))}
          />
        </div>

        <div className="flex justify-around mt-8 text-white">
          <div>
            <button className="bg-blue-400 rounded-lg py-1 px-3" onClick={() => supabase.auth.signOut()}>
              Sign Out
            </button>
          </div>

          <div>
            <button
              className="bg-blue-400 rounded-lg py-1 px-3"
              onClick={() => updateProfile({ userData })}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Save'}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}