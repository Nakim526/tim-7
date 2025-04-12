import { addNote } from "@/lib/supabase/sql/services";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    return await addNote(await request.json());
}