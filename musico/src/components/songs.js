import React, {useState } from 'react';
import axios from 'axios';
import PlaylistForm from './playlistForm';
import ArtistData from './artistdata.js';
import '../styles/songs.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const Songs = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [artist, setArtist] = useState('');
    const [artistData, setArtistData] = useState([{
        trackId: '',
        ArtistName: '',
        AlbumName: '',
        AlbumUrl: '',
        AlbumUrl60: '',
        AlbumGenre: '',
        AlbumRelease: '',
        trackName: ''
    }])

    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    async function itunesGet(params){
        try{
            const prm = params.trim();
            const para = encodeURI(prm);
            const response = await axios.get(`https://itunes.apple.com/search?term=${para}&media=music&entity=song&attribute=&=songTerm&country=JP&lang=ja_jp&limit=30`)
            const responsedata = response.data.results
            const responseAPI = responsedata.map(value => {
                return {
                    trackId: value.trackId, 
                    ArtistName: value.artistName,
                    AlbumName: value.collectionName, 
                    AlbumUrl: value.artworkUrl100,
                    AlbumUrl60: value.artworkUrl60,
                    AlbumGenre: value.primaryGenreName,
                    AlbumRelease: value.releaseDate,
                    trackName: value.trackName
                    
                };
            }
            );
            setArtistData(responseAPI);
            console.log(responsedata);
            console.log(artistData);
        }catch(error) {
            const {
                status, statusText
            } = error.response;
            console.log(`Error! HTTP Status: ${status} ${statusText}`)

        }
        
    };

    return (
        <Grid container className="songs">
            <Grid item md={5}>
                <Button variant="outlined" color="primary" onClick={handleOpen} >Create Playlist</Button>
                <Modal
                    aria-labelledby="transition-modal-form"
                    aria-describedby="transition-modal-createPlaylist"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <PlaylistForm />
                        
                    </Fade>
                </Modal>
                
                    
            </Grid>
            <Grid item md={7}>
                <form
                    className="formSongs"
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
            </Grid>
            <Grid item container md>
                <p className="result">検索結果: <b>{artist}</b></p>
                <div className="searchresult">
                {artistData.map(artistdata => (
                    <ArtistData 
                        key={artistdata.trackId.toString()}
                        id={artistdata.trackId}
                        name={artistdata.ArtistName}
                        album={artistdata.AlbumName}
                        albumUrl={artistdata.AlbumUrl}
                        AlbumUrl60={artistdata.AlbumUrl60}
                        genre={artistdata.AlbumGenre}
                        release={artistdata.AlbumRelease}
                        trackName={artistdata.trackName}
                        
                    />
                        
                )
                )}
                </div>
            </Grid> 
            
        </Grid>
    )
}

export default Songs;