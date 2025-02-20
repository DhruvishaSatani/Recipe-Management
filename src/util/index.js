

export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;


    const response = await fetch(url)
    
    const data = await response.json();
    console.log(data)
    return data

    return data?.hits;
}

// const fetchRecipes = async () => {
//     const response = await fetch(`https://api.edamam.com/search?q=Vegan&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=30`);
//     const data = await response.json();
//     console.log(data);
//   };

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}