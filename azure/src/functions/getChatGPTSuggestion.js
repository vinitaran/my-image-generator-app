const { app } = require("@azure/functions");
const openai = require("../../lib/openai");


app.http("getChatGPTSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "Write a random text promt for DALL-E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white, etc. Do not wrap the answer in quotes",
      max_tokens: 100,
      temperature: 0.8, //how random or focused u want suggestion to be - 0.2 might give same answer each time. 2 - might not be focused but random
    });

    context.log(`req3 "${request.url}"`);
    const responseText = response.data.choices[0].text;

    return { body: responseText };
  },
});
