import Image from "next/image";
import styles from "./page.module.css";
import MagazineFrame from "@/components/magizineFrame";
import Magazine from "@/components/Magazine";
import DownloadButton from "@/components/DownloadButton";


interface HomeProps {
  pages: string[];
}

export default function Home(){
  
  return (
    <>
    <div className="header">
      <nav></nav>
    </div>
    <Magazine issue="0"/>
    <DownloadButton issue="001"/>
    </>
  );
}
