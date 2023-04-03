//using shared access sign token to verify data added by the user is valid - authenticate the request - gives limited time access to the backend service
// account(bloblserviceclient) > container(containerClient) > blob(blockblobclient - all files in the container)



const { app } = require("@azure/functions");
const openai = require("../../lib/openai");
const axios = require("axios");
const generateSASToken = require("../../lib/generateSASToken");

const { BlobServiceClient } = require("@azure/storage-blob");

const accountName = process.env.accountName;

const containerName = "images";

app.http("generateImage", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    const { prompt } = await request.json();

    console.log(`Prompt is ${prompt}`);
    //communicate to dalle ->  pass prompt -> return image url
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data.data[0].url;

    // download image
    // mention responsetype -> response should be array buffer(represent image in blocb fashion - png representation)
    // create arraybuffer to download image and save the image in azure server
    const res = await axios.get(image_url, { responseType: "arraybuffer" });
    const arrayBuffer = res.data;

    // create sas token
    sasToken = await generateSASToken();

    // connect to account
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net?${sasToken}`
    );

    //connect to container
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // generate current timestamp
    const timestamp = new Date().getTime();
    const file_name = `${prompt}_${timestamp}.png`;

    // save image in blockblob
    const blockBlobClient = containerClient.getBlockBlobClient(file_name);

    //upload image
    try {
      await blockBlobClient.uploadData(arrayBuffer);
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }

    return { body: "Successfully Uploaded Image" };
  },
});

