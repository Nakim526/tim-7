import { supabaseDB } from "@/lib/supabase/init";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const req = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    file: formData.get("file") as File,
    fileName: formData.get("fileName") as string,
    mimeType: formData.get("mimeType") as string,
  };

  const temp = await req.file.arrayBuffer();
  const buffer = Buffer.from(temp);

  const { data: uploaded, error: uploadError } = await supabaseDB.storage
    .from("images")
    .upload(`arsip/${Date.now().toString()}_${req.fileName}`, buffer, {
      contentType: req.mimeType,
      cacheControl: "3600",
    });

  if (uploadError) {
    return NextResponse.json({ status: 500, message: uploadError.message });
  }

  const { data: imageUrl } = supabaseDB.storage
    .from("images")
    .getPublicUrl(uploaded.path);

  if (imageUrl) {
    const { data, error } = await supabaseDB.from("arsip").insert({
      title: req.title,
      description: req.description,
      image: imageUrl.publicUrl,
    }).select("*");

    if (error) {
      return NextResponse.json({ status: 500, message: error.message });
    }

    return NextResponse.json({
      status: 200,
      message: "Success",
      title: req.title,
      description: req.description,
      data: data[0],
    });
  }
}
