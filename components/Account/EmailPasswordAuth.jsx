import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
import Link from 'next/link'

function TextInput({ label, type, onChangeHandler, required=false, value="", useDark=true, placeholder='' }) {
  return (
    <div className="pt-2 px-2 w-full">
      <label htmlFor="email" className={useDark ? "block text-sm font-medium text-gray-700 dark:text-gray-300" : "block text-sm font-medium text-gray-700"}>
        {label}
      </label>
      <div className="mt-1">
        <input
          id={`input-id--${type}--${label}`}
          name={type}
          type={type}
          autoComplete={type}
          required={required}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm dark:bg-gray-700 dark:text-gray-300"
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

async function handleSignIn(userEmail, userPassword, router) {
  try {
    const { email, password, error } = await supabase.auth.signIn(
      {
        email: userEmail,
        password: userPassword,
      })
    if (error) throw error
    const userSession = await supabase.auth.session()
    if (!userSession) {
      console.error(error)
    }
  } catch (error) {
    console.error(error['error_description'] || error.message)
  } finally {
    if (await supabase.auth.session()) {
      router.push('/create-new-url')
    }
  }
}

async function handleSignUp(userEmail, userPassword, userName) {
  try {
    const {email, password, error, data: result} = await supabase.auth.signUp(
      {
        email: userEmail,
        password: userPassword,
      }
    )
    if (result) {
      console.log(result)
    }
  } catch (error) {
    console.error(error['error_description'] || error.message)
  }
}

export default function EmailPasswordAuth({ registrationType }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [content, setContent] = useState('signup')

  const router = useRouter()

  useEffect(() => {
    if (registrationType === 'signup') {
      setContent('signup')
    }
    if (registrationType === 'signin') {
      setContent('signin')
    }
  }, [])

  useEffect(() => {
    if (supabase.auth.session()) {
      router.push('/app/')
    }
  }, [])



  function Button({ type, onClickHandler, disabled=false, children }) {
    return (
      <button
        type={type}
        className="
        w-full flex justify-center py-2 px-4 border border-transparent
        rounded-md shadow-sm text-sm font-bold text-white bg-green-500 dark:bg-green-500
        dark:text-gray-900 dark:hover:bg-amber-400 hover:bg-green-500 transition duration-150
        hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
      "
        onClick={onClickHandler}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            {content === 'signin' && (
              <>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-sm text-gray-600">
                  or{' '}
                  <Link href={"/signup"}>
                    <a className="font-medium text-black hover:bg-green-500 bg-green-400 py-1 px-3 rounded-lg text-xs">
                      sign up free
                    </a>
                  </Link>
                </p>
              </>
            )}
            {content === 'signup' && (
              <>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign up for a free account</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href={"/signin"}>
                    <a className="font-medium text-black hover:bg-green-500 bg-green-400 py-1 px-2 rounded-lg text-xs">
                      Sign in
                    </a>
                  </Link>
                </p>
              </>
            )}
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-1">
                <TextInput
                  label="Email address"
                  type="email"
                  onChangeHandler={(e) => setEmail(e.target.value)}
                  required={true}
                  value={email}
                  useDark={false}
                />
                <TextInput
                  label="Password"
                  type="password"
                  onChangeHandler={(e) => setPassword(e.target.value)}
                  required={true}
                  value={password}
                  useDark={false}
                />
                <div className="mx-2 pt-2">
                  <Button type="submit" onClickHandler={(e) => {
                    e.preventDefault()
                    content === 'signup' ? handleSignUp(email, password, name).then(() => setTimeout(() => { return router.push('/app') }, 1000)) : handleSignIn(email, password, router)
                  }}>
                    {content === 'signin' ? "Sign in" : "Sign up"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover filter grayscale-`"
          src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
    </div>
  )
}