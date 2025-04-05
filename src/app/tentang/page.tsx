import { supabaseDB } from "@/lib/supabase/init";

interface Notes {
  id: number;
  title: string;
}

const fetchData = async () => {
  const { data, error } = await supabaseDB.from("notes").select("*");
  console.log("Error: ", error);
  if (error) throw error;
  console.log("Data: ", data);
  return data;
};

export default async function TentangPage() {
  const data = await fetchData();

  return (
    <>
      <div>
        <h1>Tentang Page</h1>
      </div>
      <div>
        <ul>
          {data!.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
