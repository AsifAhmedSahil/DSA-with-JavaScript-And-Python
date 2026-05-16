/* =========================
   INPUT
========================= */

const watchedCategories = [
    "Code",
    "Food"
];

const watchedCategoriesRelevance = [
    200,
    100
];

const availableVideoTitles = [
    "APIs",
    "Pasta",
    "ML",
    "Tips",
    "Bread",
    "Workout"
];

const availableVideoCategories = [
    "Code",
    "Food",
    "Code",
    "Health",
    "Food",
    "Sports"
];

/* =========================
   FUNCTION CALL
========================= */



/*
Expected Output:

[
  'APIs',
  'ML',
  'Bread',
  'Pasta',
  'Tips',
  'Workout'
]
*/

function getRecommendedVideos(
    watchedCategories,
    watchedCategoriesRelevance,
    availableVideoTitles,
    availableVideoCategories
){
    // step 1 - watched category -> relevence map
    const watchedMap = {}

    for(let i=0; i< watchedCategories.length;i++){
        watchedMap[watchedCategories[i]] = watchedCategoriesRelevance[i];
    }

    // step-2 : group videos by category

    const categoryVideos = {}

    for(let i =0; i< availableVideoTitles.length; i++){
        const category = availableVideoCategories[i]
        const title = availableVideoTitles[i]

        if(!categoryVideos[category]){
            categoryVideos[category] = []
        }



        categoryVideos[category].push(title)
    }

    // step 3 : sort videos alphabetically inside category
    for (const category in categoryVideos){
        categoryVideos[category].sort((a,b) => 
            a.localeCompare(b)
        );
    }

    // Step 4: separate watched and unwatched categories
    const watched = []
    const unwatched = []

    for(const category in categoryVideos){
        if(category in watchedMap){
            watched.push(category);
        }else{
            unwatched.push(category);
        }
    }

     // Step 5: watched categories
    //  relevence descending
    // if same relevence -> alphabetically

    watched.sort((a,b)=>{
        // decresing order sort
        if(watchedMap[b] !== watchedMap[a]){
            return watchedMap[b] - watchedMap[a]
        }

        // if same then alphabetically
        return a.localeCompare(b);
    })

    // step 6 - unwatched alphabetically
    unwatched.sort((a,b)=>{
        return a.localeCompare(b)
    })

    // step 7 - final result
    const result = []

    for(const category of [...watched,...unwatched]){
        result.push(...categoryVideos[category])
    }

    return result


}


const output = getRecommendedVideos(
    watchedCategories,
    watchedCategoriesRelevance,
    availableVideoTitles,
    availableVideoCategories
);

/* =========================
   OUTPUT
========================= */

console.log(output);
