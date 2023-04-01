// helps to use state and click handlers
'use client'

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from 'swr';

// propmtinput is client component as user has to interact with the buttons in this loadComponents. rest components in next13 are server based components

const PromptInput = () => {

  const [input, setInput] = useState("");
  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });

  console.log(suggestion);

  return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-4 outline-none rounded-md"  />
            <button disabled={!input} type="submit" className={`p-4 font-bold ${input ? "bg-violet-500 text-white transition-colors duration-300" : "cursor-not-allowed text-gray-500"}`}>Generate</button>
            <button type="button" className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">Use Suggestion</button>
            <button type="button" className="p-4 bg-white text-violet-400 transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">Generate Suggestion</button>
        </form>
    </div>
  )
}
export default PromptInput