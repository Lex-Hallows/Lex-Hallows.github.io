"use client"
import MagazineFrame from '@/components/magizineFrame'; // Adjust the import path as necessary
import { useEffect, useState } from 'react';

export type MagazineProps = {
    issue: string;
}
// This is the page component
const Magazine = ({issue}:MagazineProps) => {
    const [pages, setPages] = useState<string[]>([]);

    useEffect(() => {
        const fetchPages = async () => {
            try{
            const response = await fetch(`/api/magazine`);
            if (!response.ok) {
                throw new Error(`Error fetching pages: ${response.statusText}`);
            }
            const data = await response.json();
            setPages(data.pageList[issue]);
        } catch (error) {
            console.log(error);
        }
        };

        fetchPages();
    }, [issue]);
    if (!pages.length) {
        return <div>Loading...</div>;
    }

  return <MagazineFrame pages={pages} />;
};

export default Magazine;

// Adjust your MagazineFrame component to accept and use the pages prop