import React from 'react';
import classes from "./SquareTile.module.css";
import cn from "classnames";
import {AlbumType} from "../../../types";

const SquareTile = (props: AlbumType) => {
    // Если бы не требовалось не использовать перебивку стилей, то использовал бы её.
    const colorTile = {
        [classes[props.type]]: !!classes[props.type],
        [classes.without_type]: !classes[props.type],
    }

    return (
        <div className={classes.tile_wrapper}>
            <div className={cn(classes.tile_container, colorTile)}>
                <h3 className={classes.label}>{props.label}</h3>
            </div>
        </div>
    );
}

export default SquareTile;
