import React from 'react';

const ArtistData = (props) => {

    return(
        
        <div className={props.id ? 'album': 'noalbum'}>
            <div className="flex">
                <img src={props.albumUrl} alt={props.album} className="albumImage"/>
                <div>
                    <p>ジャンル: <b>{props.genre}</b></p>
                </div>
                
            </div>
            <div className="mask">
                <div className="caption">{props.album}</div>
            </div>
            <div>
                <p>アーティスト: <b>{props.name}</b></p>
                <p>アルバム名: <b>{props.album}</b></p>
                <p>リリース日: <b>{props.release}</b></p>
            </div>
            
            
            
        </div>
    );
}

export default ArtistData