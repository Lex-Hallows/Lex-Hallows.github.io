import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
    console.log('pinged')
    const issuesDirectory = path.join(process.cwd(), 'public','magazine');
    const issues = await fs.promises.readdir(issuesDirectory);
    const issueList = issues.map((issue) => {
        return parseInt(issue);    
      })
    if (!issueList.every((issue) => !isNaN(issue))) {
        throw new Error('Issue directories must be named with numbers');
    }
    const sortedIssues = issueList.sort((a, b) => {return a-b});

    return new Response(JSON.stringify({ sortedIssues }), {
        status: 200,
    });
}