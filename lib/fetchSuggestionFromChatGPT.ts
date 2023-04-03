const fetchSuggestionFromChatGPT = async() =>{
  const response = await fetch(
    "https://ai-image-generator-app-vin.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );
  const textData = (await response.text()).trim();
  console.log(textData);
  return textData;
}

export default fetchSuggestionFromChatGPT;

