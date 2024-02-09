import Image from "next/image";

export function AvatarGenerator() {
  return (
    <div className="border border-[#d9d9d9] rounded-xl w-full flex flex-col items-start p-[15px] space-y-2.5">
      <p>escolha um avatar</p>
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-center items-center space-x-6">
          <Image
            src="/avatar/avatar6.png"
            alt="Avatar"
            width={64}
            height={64}
          />
          <Image
            src="/avatar/avatar10.png"
            alt="Avatar"
            width={64}
            height={64}
          />
          <Image
            src="/avatar/avatar13.png"
            alt="Avatar"
            width={64}
            height={64}
          />
        </div>
        <button>
          <Image
            src="/icon/refresh-icon.svg"
            alt="Refresh"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
