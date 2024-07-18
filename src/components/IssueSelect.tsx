"use client"
import { useContext, useEffect, useState } from "react";
import { IssueContext } from "./context/issueContext";

export default  function IssueSelect() {
    let [issues, setIssues] = useState(['loading issues...']);
    const [, setSelectedIssue] = useContext(IssueContext) as [string, (issue: string) => void];
    useEffect(() => {
        const fetchIssues = async () => {
        await fetch(`/api/issues`)
        .then((response) => response.json())
        .then((data) => {
            setIssues(data.sortedIssues);
        });}
        fetchIssues();
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedIssue(event.target.value);
    };

    return (
        <div className="select-container">
        <label htmlFor="issue-select">Select an issue:  </label>
        <select id="issue-select" onChange={handleChange}>
            {issues.map((issue) => {
                return <option key={issue} value={issue}>{issue}</option>
            })}
        </select>
        </div>
    )
}