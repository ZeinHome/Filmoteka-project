

function createYear(results){
    let releaseYear= results.release_date?.split("-").slice(0, 1);
    return releaseYear;
}



export{
    createYear,
}