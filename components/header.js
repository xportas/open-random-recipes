import Image from "next/image";

export default function Header({ activeTab, previousTabRef }) {
  return (
    <header className="flex justify-between items-center w-11/12 px-margin-mobile py-sm sticky top-2 z-40 border border-neutral-200 rounded-3xl mt-2 mx-auto bg-white/30 backdrop-blur-xs shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
      <Image
        src="/opr-horizontal-logo.png"
        alt="opr-logo"
        width={150}
        height={150}
      />
      <button
        onClick={() => activeTab.activeTab !== 'settings' ?
          activeTab.setActiveTab("settings") : activeTab.setActiveTab(previousTabRef)
        }
        className="w-10 h-10 flex items-center justify-center text-neutral-600 active:scale-95 transition-transform duration-200 rounded-full hover:bg-neutral-100">
        {activeTab.activeTab !== 'settings' ?
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            tune
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
  );
}
