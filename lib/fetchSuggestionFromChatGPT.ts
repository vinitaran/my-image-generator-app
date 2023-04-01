const fetchSuggestionFromChatGPT = async() =>{
  const response = await fetch(
    "http://localhost:7071/api/getChatGPTSuggestion",
    {
      cache: "no-store",
    }
  );
  const textData = (await response.text()).trim();
    console.log(textData);
  return textData;
}

export default fetchSuggestionFromChatGPT;

