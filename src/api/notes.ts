import { supabaseDB } from "@/lib/supabase/init";

export const onAdd = async (formData: FormData) => {
  const name = formData.get("name");
  await supabaseDB.from("notes").insert([
    {
      title: name,
    },
  ]);
  console.log("Data sended");
};
