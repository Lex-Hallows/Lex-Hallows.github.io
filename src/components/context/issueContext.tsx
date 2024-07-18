"use client"
import { ReactNode, createContext,useState } from "react";
type IssueContextType = [string|number, (issue: string|number) => void];

export const IssueContext = createContext<IssueContextType|undefined>(undefined);

interface IssueProviderProps {
    children: ReactNode; // This type is provided by React and can represent any valid React child
}
export const IssueProvider: React.FC<IssueProviderProps> = ({ children }) => {
    const [selectedIssue, setSelectedIssue] = useState<string|number>('0');
    return (
        <IssueContext.Provider value={[selectedIssue, setSelectedIssue ]}>
            {children}
        </IssueContext.Provider>
    );
}