// helps to use state and click handlers
"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

// propmtinput is client component as user has to interact with the buttons in this loadComponents. rest components in next13 are server based components

const PromptInput = () => {
  const [input, setInput] = useState("");

  const suggestions = [
    "Create a black and white abstract painting of a river landscape in 4K resolution.",
    "Create a modern abstract painting of a flying bird in a sunset sky, in 4K resolution.",
    "A modern, abstract painting of an open book with a black and white butterfly resting on its pages in 4K resolution.",
    "Create a photo-realistic oil painting of a sun-drenched beach in modern times.",
    "Generate a modern, black and white abstract oil painting of a cityscape at night.",
    "Create a 4k abstract modern oil painting of a house in a forest with a bright yellow moon in the sky.",
  ];

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
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
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
