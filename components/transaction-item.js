import { useFormatCurrency } from "@/hooks/use-format-currency"
import { HandCoins, Landmark, PiggyBank, Wallet } from "lucide-react";

export default function TransactionItem({ type, category, description, amount }) {
  const formatedAmount = useFormatCurrency(amount);

  const typesMap = {
    'Income': {
      icon: HandCoins,
      color: 'text-green-500 dark:text-green-400'
    },
    'Expense': {
      icon: Wallet,
      color: 'text-red-500 dark:text-red-400'
    },
    'Saving': {
      icon: PiggyBank,
      color: 'text-indigo-500 dark:text-indigo-400'
    },
    'Investment': {
      icon: Landmark,
      color: 'text-indigo-500 dark:text-indigo-400'
    },
  };

  const IconComponent = typesMap[type].icon;
  const color = typesMap[type].color;
  
  return(
    <div className="w-full flex items-center">
      <IconComponent className={`${color} mr-2 w-4 h-4 hidden sm:block`} />
      <div className="flex items-center mr-4 grow">
        <span>{description}</span>
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        {category && 
          <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>}
      </div>

      <div className="min-w-[70px] text-right">{formatedAmount}</div>

      <div className="min-w-[50px] flex justify-end">...</div>
    </div>
  )
}