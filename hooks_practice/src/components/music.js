import React, {useState } from 'react';
import axios from 'axios';
import ArtistData from './artistdata.js';
import '../styles/music.css'
const Music = () => {
    const [artist, setArtist] = useState('');
    const [artistData, setArtistData] = useState([{
        CollectionId: '',
        ArtistName: '',
        AlbumName: '',
        AlbumUrl: '',
        AlbumGenre: '',
        AlbumRelease: '',
    }]);

    async function itunesGet(params){
        try{
            const prm = params.trim();
            const response = await axios.get(`https://itunes.apple.com/search?term=${prm}&entity=album`)
            const responsedata = response.data.results
            const responseAPI = responsedata.map(value => {
                return {
                    CollectionId: value.collectionId, 
                    ArtistName: value.artistName,
                    AlbumName: value.collectionName, 
                    AlbumUrl: value.artworkUrl100,
                    AlbumGenre: value.primaryGenreName,
                    AlbumRelease: value.releaseDate,
                    
                };
            }
            );
            setArtistData(responseAPI);
            console.log(artistData);
        }catch(error) {
            const {
                status, statusText
            } = error.response;
            console.log(`Error! HTTP Status: ${status} ${statusText}`)

        }
        
    };

    return (
        <div>
            <form
                onSubmit = {e => {
                    e.preventDefault();
                    const artistnameElement = e.target.elements["artist"];
                    console.log(artistnameElement.value);

                    itunesGet(artistnameElement.value);

                    setArtist(artistnameElement.value);

                    artistnameElement.value = '';
       
                }}
            >
                <input type="text" id="artist"
                    placeholder="アーティスト名または曲名を入力してください"
                />
                <button type="submit">検索する</button>


            </form>
            <p className="result">検索結果: <b>{artist}</b></p>
            <div className="searchresult">
            {artistData.map(artistdata => (
                <ArtistData 
                    key={artistdata.CollectionId.toString()}
                    id={artistdata.CollectionId}
                    name={artistdata.ArtistName}
                    album={artistdata.AlbumName}
                    albumUrl={artistdata.AlbumUrl}
                    genre={artistdata.AlbumGenre}
                    release={artistdata.AlbumRelease}
                    
                />
                    
            )
            )}
            </div>
           
        </div>
    )
}

export default Music