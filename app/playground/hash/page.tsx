"use client";
import { useState } from "react";


const hashes = [
{ t: "MD5", ex: "5d41402abc4b2a76b9719d911017c592" },
{ t: "SHA-1", ex: "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12" },
{ t: "SHA-256", ex: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" },
];


export default function HashLab(){
const [pick, setPick] = useState<string>("");
const answer = (h: string)=> {
const len = h.length; if(len===32) return "MD5"; if(len===40) return "SHA-1"; if(len===64) return "SHA-256"; return "Unknown";
};
const sample = hashes[Math.floor(Math.random()*hashes.length)];
return (
<div className="space-y-4">
<h1 className="text-2xl font-semibold">Hash Lab</h1>
<p className="text-neutral-600">Which hash algorithm produced this?</p>
<code className="block p-3 border rounded-xl text-sm break-all">{sample.ex}</code>
<div className="flex gap-3">
{hashes.map(h=> (
<button key={h.t} onClick={()=>setPick(h.t)} className="px-3 py-2 rounded-xl border">{h.t}</button>
))}
</div>
{pick && <p className="text-sm">{pick===answer(sample.ex) ? "✅ Correct" : "❌ Try again"}</p>}
</div>
);
}