export default function AvatarLoading() {
  return (
    <div className="rounded-md p-4 max-w-sm w-full py-1">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-200 h-12 w-12" />
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  )
}