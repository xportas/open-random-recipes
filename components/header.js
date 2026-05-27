import Image from "next/image";

export default function Header({ activeTab, previousTab }) {
  return (
    <>
      <header className="flex justify-between items-center w-11/12 px-margin-mobile py-sm sticky top-2 z-40 border border-[#4A4A48] rounded-full mt-2 mx-auto backdrop-blur-xs">
        <Image
          src="/opr-horizontal-logo.png"
          alt="opr-logo"
          width={170}
          height={170}
        />
        <button
          onClick={() => activeTab.activeTab !== 'settings' ?
            activeTab.setActiveTab("settings") : activeTab.setActiveTab(previousTab.previousTab)
          }
          className="w-10 h-10 flex items-center justify-center text-[#4A4A48] active:scale-95 transition-transform duration-200 rounded-full">
          {activeTab.activeTab !== 'settings' ?
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              settings
            </span>
            :
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              close
            </span>
          }
        </button>
      </header>
    </>
  );
}
