export function getMediaList(type) {
  const API_KEY = "8ab6094917beb0cc646622d87f11fba1";
  const baseUrl = "https://api.themoviedb.org/3";
  const url = `${baseUrl}/discover/${type}?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&primary_release_date.gte=2021-08-01&include_adult=false&page=1`;

  try {
    fetch(url).then((result) => {
        return result.json();
    })
  } catch(err){
      console.log(err)
  }
}
