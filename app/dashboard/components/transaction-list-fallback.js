import Sceleton from "@/components/sceleton"

export default function TransactionListFallback () {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
      <TransactionSummaryItemSceleton />
      <TransactionItemSceleton />
      <TransactionItemSceleton />
      <TransactionItemSceleton />
      <TransactionItemSceleton />
    </div>
    <div className="space-y-4">
      <TransactionSummaryItemSceleton />
      <TransactionItemSceleton />
      <TransactionItemSceleton />
      <TransactionItemSceleton />
      <TransactionItemSceleton />
    </div>
    </div>
  )
}

function TransactionItemSceleton() {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="flex items-center mr-4 grow">
        <Sceleton />
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        <Sceleton />
      </div>

      <div className="min-w-[70px] text-right"><Sceleton /></div>

      <div className="min-w-[50px] flex justify-end"><Sceleton /></div>
    </div>
  )
};

function TransactionSummaryItemSceleton() {
  return (
    <div className="flex space-x-4">
    <div className="grow">
      <Sceleton />
    </div>

    <div className="min-w-[70px]">
    <Sceleton />
    </div>

    <div className="min-w-[50px]"></div>
  </div>
  )
}