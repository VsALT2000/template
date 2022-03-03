import React from 'react';
import classes from "./SquareTile.module.css";
import cn from "classnames";
import {AlbumType} from "../../../types";

const SquareTile = (props: AlbumType) => {
    let typeTile;
    switch (props.type) {
        case "podcast":
            typeTile = classes.podcast;
            break;
        case "rock":
            typeTile = classes.rock;
            break;
        case "liked":
            typeTile = classes.liked;
            break;
        case "phonk":
            typeTile = classes.phonk;
            break;
        case "metal":
            typeTile = classes.metal;
            break;
        case "classic":
            typeTile = classes.classic;
            break;
        case "new":
            typeTile = classes.new;
            break;
        case "radio":
            typeTile = classes.radio;
            break;
    }
    return (
        <div className={classes.tile_wrapper}>
            <div className={cn(classes.tile_container, typeTile)}>
                <h3 className={classes.label}>{props.label}</h3>
            </div>
        </div>
    );
}

export default SquareTile;
