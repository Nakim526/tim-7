import { NextResponse } from "next/server";
import { supabaseDB } from "../init";
import { NotesProps } from "@/lib/interface";

export async function addNote(data: NotesProps) {
  const { error } = await supabaseDB.from("notes").insert({
    title: data.title,
  });
  if (error) {
    return NextResponse.json({ status: 500, message: error.message });
  } else {
    return NextResponse.json({ status: 200, message: "Success" });
  }
}
