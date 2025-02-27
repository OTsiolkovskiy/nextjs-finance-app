export default function Sceleton (props) {
  return (
    <div className={`animate-pulse w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-md ${props.className}`}></div>
  )
}