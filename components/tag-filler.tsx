"use client";
import { useState } from "react";


export function TagFilter({ tags, onChange }: { tags: string[]; onChange: (active: string[])=>void }){
const [active, setActive] = useState<string[]>([]);
function toggle(t: string){
const next = active.includes(t) ? active.filter(x=>x!==t) : [...active, t];
setActive(next); onChange(next);
}
return (
<div className="flex flex-wrap gap-2">
{tags.map(t => (
<button key={t} onClick={()=>toggle(t)}
className={`px-3 py-1 rounded-full border text-sm ${active.includes(t)?"bg-neutral-900 text-white border-neutral-900":"border-neutral-300 hover:bg-neutral-50"}`}>{t}</button>
))}
</div>
);
}