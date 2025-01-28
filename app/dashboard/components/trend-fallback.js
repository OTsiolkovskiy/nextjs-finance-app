import Sceleton from "@/components/sceleton";

export default function TrendFallback () {
  return (
    <div className="space-y-5 w-3/5 lg:w-5/6">
      <div>
        <Sceleton />
      </div>

      <div className="text-2xl">
       <Sceleton />
      </div>

      <div className="flex space-x-1 items-center">
        <Sceleton />
      </div>
    </div>
  )
}