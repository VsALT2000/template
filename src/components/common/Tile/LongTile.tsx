import React from 'react';
import classes from "./LongTile.module.css";
import {UserAlbumType} from "../../../types";

const LongTile = (props: UserAlbumType) => {
    return (
        <div className={classes.tile_wrapper}>
            <div className={classes.tile_container}>
                <img className={classes.image} height={100} width={100} src={props.link} alt={"Обложка"}/>
            </div>
            <h3 className={classes.label}>{props.label}</h3>
        </div>
    );
}


export default LongTile;
