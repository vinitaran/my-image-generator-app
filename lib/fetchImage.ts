const fetchImage = async() => {
    const response = await fetch(
        "https://ai-image-generator-app-vin.azurewebsites.net/api/getimages",
        {
          cache: "no-store",
        }
      );
    
      const blob = await response.blob();
      const textData = await blob.text();
    
      const data = JSON.parse(textData);

      console.log(data);
    
      return data;
}


export default fetchImage;