import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
    console.log('pinged')
    const searchParams = req.url
    let issue = searchParams.split('=')[1];
    if (!issue) {
       return new Response('Issue parameter is required', { status: 400 });
    }
    const magazineDirectory = path.join(process.cwd(), 'public','magazine', issue);
    const fileNames = await fs.promises.readdir(magazineDirectory);
    const pages = fileNames.sort().map(fileName => `/magazine/${issue}/${fileName}`);

    return new Response(JSON.stringify({ pages }), {
        status: 200,
    });
}