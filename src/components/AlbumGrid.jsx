import React from "react";
import Album from "./Album";
import './AlbumGrid.css'



const AlbumGrid = ({ albums }) => {
    return (
        <div className="album-grid">
            {albums.map((album) => (
                <Album
                    key={album.id}
                    {...album}
                />
            ))}
        </div>
    );
};

export default AlbumGrid;
