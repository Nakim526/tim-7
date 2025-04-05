import { supabaseDB } from "@/lib/supabase/init";

export const onAdd = async (formData: FormData) => {
  const name = formData.get("name");
  // const email = formData.get("email");
  // const subject = formData.get("subject");
  // const message = formData.get("message");
  await supabaseDB.from("notes").insert([
    {
      title: name,
    },
  ]);
  console.log("Data sended");
  // return data;
};
