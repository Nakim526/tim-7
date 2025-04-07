"use client";

import { NotesProps } from "@/lib/interface";
import { useEffect, useState } from "react";

// const fetchData = async () => {
//   const res = await fetch("api/notes", {
//     method: "GET",
//     cache: "no-cache",
//   });
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

export default function TentangPage() {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await fetch("api/notes", {
        method: "GET",
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setNotes(data.data);
          setLoading(false);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Tentang Page</h1>
      </div>
      {loading && <h1>Loading...</h1>}
      <div>
        <ul>
          {notes.map((item: NotesProps) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
