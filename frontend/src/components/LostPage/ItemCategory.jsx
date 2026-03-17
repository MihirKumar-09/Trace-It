import {
  BriefcaseBusiness,
  Cable,
  Gem,
  Glasses,
  KeySquare,
  Laptop,
  LayoutGrid,
  NotepadText,
  Panda,
  Shirt,
  Smartphone,
  TabletSmartphone,
  Wallet2,
  Watch,
} from "lucide-react";

export default function ItemCategory() {
  return (
    <section className="px-3 sm:px-5 md:px-10 py-10 ">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 min-w-max px-3">
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Smartphone color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Phones</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <TabletSmartphone color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Tablets</span>
          </div>
          <div className="flex flex-col gap-1  items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Wallet2 color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Wallets</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <KeySquare color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Keys</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Gem color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Jewelries</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Laptop color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Laptops</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <BriefcaseBusiness color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Briefcase</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Cable color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">
              Electronics
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Glasses color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">
              Accessories
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Shirt color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Clothing</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Watch color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Watches</span>
          </div>
          <div className="flex flex-col gap-1  items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <NotepadText color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Documents</span>
          </div>
          <div className="flex flex-col gap-1  items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <Panda color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Pets</span>
          </div>
          <div className="flex flex-col gap-1 items-center min-w-30 shrink-0 bg-white px-6 py-5 rounded-2xl border border-gray-200">
            <span className="p-2 rounded-xl" style={{ background: "#FDEEE7" }}>
              <LayoutGrid color="#EC5B13" />
            </span>
            <span className="text-sm md:text-base font-medium">Others</span>
          </div>
        </div>
      </div>
    </section>
  );
}
