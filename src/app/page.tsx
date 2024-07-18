
import Magazine from "@/components/Magazine";
import DownloadButton from "@/components/DownloadButton";
import Header from "@/components/Header";
import { IssueProvider } from "@/components/context/issueContext";

export default function Home(){
  
  return (
    <>
    <IssueProvider>
    <Header/>
    <Magazine/>
    <DownloadButton/>
    </IssueProvider>
    </>
  );
}
