import React from 'react';
import classes from "./Search.module.css";
import SquareTile from "../common/Tile/SquareTile";
import {AlbumType} from "../../types";

type OwnPropsType = {
    topAlbums: Array<AlbumType>,
    albums: Array<AlbumType>,
}

const Search = (props: OwnPropsType) => {
    return (
        <div className={classes.content_wrapper}>
            <h2>Топ жанров</h2>
            <div>
                <div className={classes.tiles_wrapper}>
                    {
                        props.topAlbums.map((tile: AlbumType, i: number) => {
                            return <SquareTile {...tile} key={i}/>
                        })
                    }
                </div>
            </div>
            <h2>Все остальное</h2>
            <div>
                <div className={classes.tiles_wrapper}>
                    {
                        props.albums.map((tile: AlbumType, i: number) => {
                            return <SquareTile {...tile} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
