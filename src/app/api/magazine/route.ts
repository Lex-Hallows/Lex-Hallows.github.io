import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
    console.log('pinged')
    let pageList:string[][] = [];
    const issuesDirectory = path.join(process.cwd(), 'public','magazine');
    const issues = await fs.promises.readdir(issuesDirectory);
    const promises = issues.map(async issue => {
    const magazineDirectory = path.join(process.cwd(), 'public','magazine', issue);
    const fileNames = await fs.promises.readdir(magazineDirectory);
    const pages = fileNames.sort().map(fileName => `/magazine/${issue}/${fileName}`);
    pageList.push(pages);
    });
    await Promise.all(promises);

    return new Response(JSON.stringify({ pageList }), {
        status: 200,
    });
}