import {RefreshIcon} from '@heroicons/react/outline'

export default function LoadingWheel() {
  return (
    <svg className="animate-reverse-spin h-72 w-16 mr-3" viewBox="0 0 24 24">
      <RefreshIcon />
    </svg>
  )
}
