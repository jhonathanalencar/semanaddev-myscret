import Image from "next/image";
import Styles from "./styles.module.css";

export function Header() {
  return (
    <header className="py-[35px]">
      <div className={Styles.logo}>
        <Image src="/logo.png" alt="MyScret" width={24} height={24} />
        <span>myScret</span>
      </div>
    </header>
  );
}
