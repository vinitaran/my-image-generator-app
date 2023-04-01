const fetchImage = async() => {
    const response = await fetch(
        "http://localhost:7071/api/getImages",
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