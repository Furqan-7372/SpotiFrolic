import { useSpotifyApi } from "../../Apis";

export const HomeScreenData = async () => {
    const {getAlbumData} = useSpotifyApi();
    let albums
    try {
        albums = await getAlbumData();

        // response.data.albums.items[0].name 
        // IMPORTANTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
        // =====================================

        console.log('Check')
        // setCategories(categoriesData.categories.items);
      } catch (err) {
        console.error(err);
        // setError('Error fetching categories');
      }
    return albums
}