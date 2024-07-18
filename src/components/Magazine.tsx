"use client"
import MagazineFrame from '@/components/MagazineFrame'; // Adjust the import path as necessary
import { useContext, useEffect, useState } from 'react';
import { IssueContext } from './context/issueContext';

export type MagazineProps = {
    issue: string;
}
// This is the page component
const Magazine = () => {
    const [pages, setPages] = useState<string[]>([]);
    const [pageList, setPageList] = useState<string[][]>([]);
    const [selectedIssue,setSelectedIssue] = useContext(IssueContext) as [string, (issue: string) => void];
    useEffect(() => {
        const fetchPages = async () => {
            try{
            const response = await fetch(`/api/magazine`);
            if (!response.ok) {
                throw new Error(`Error fetching pages: ${response.statusText}`);
            }
            const data = await response.json();
            setPageList(data.pageList);
        } catch (error) {
            console.log(error);
        }
        };

        fetchPages();
    }, []);
    useEffect(() => {
        if (pageList.length) {
            setPages(pageList[parseInt(selectedIssue)]);
        }
    },[selectedIssue, pageList]);
    if (!pages.length) {
        return <div>Loading...</div>;
    }

  return <MagazineFrame pages={pages} />;
};

export default Magazine;

// Adjust your MagazineFrame component to accept and use the pages prop