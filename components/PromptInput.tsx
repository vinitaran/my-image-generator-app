// helps to use state and click handlers
"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { FormEvent, useState } from "react";
import useSWR from "swr";

// propmtinput is client component as user has to interact with the buttons in this loadComponents. rest components in next13 are server based components

const PromptInput = () => {
  const [input, setInput] = useState("");

  const submitPrompt = async(useSuggestion?: boolean) => {
    const inputPrompt = input;
    setInput("");
    const p = useSuggestion ? suggestion: inputPrompt;
    const res = await fetch('http://localhost:7071/api/generateImage', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt: p})
    })
    console.log(res);
    const data = await res.json();
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitPrompt();
  }

  //isLoading used at the start. when we mutate it will use isValidate

  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });

  const loading = isLoading || isValidating;

  return (
    <div className="m-10">
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          placeholder={
            (loading && "Loading...") || suggestion 
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          disabled={!input}
          type="submit"
          className={`p-4 font-bold ${
            input
              ? "bg-violet-500 text-white transition-colors duration-300"
              : "cursor-not-allowed text-gray-500"
          }`}
        >
          Generate
        </button>
        <button
          onClick={() => submitPrompt(true)}
          type="button"
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-violet-400 transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={() => mutate()}
        >
          Generate Suggestion
        </button>
        
      </form>
      {input && (
          <p className="italic pt-2 pl-2 font-light">
            Suggestion:{" "}
            <span className="text-violet-500">              
              {loading ? "chatGPT is thinking..." : suggestion}
            </span>
          </p>
        )}
    </div>
  );
};
export default PromptInput;
