import React from 'react';
import classes from "./MainPage.module.css";
import LongTile from "../common/Tile/LongTile";
import {UserAlbumType} from "../../types";

type OwnPropsType = {
    userAlbums: Array<UserAlbumType>
}

const getTimeName = () => {
    const time = new Date().getHours();
    if (time < 6 && time >= 0)
        return "Спокойной ночи";
    if (time < 12 && time >= 6)
        return "Доброе утро";
    if (time < 18 && time >= 12)
        return "Продуктивного дня";
    if (time < 24 && time >= 18)
        return "Приятного вечера";
}

const MainPage = (props: OwnPropsType) => {
    const timeName = getTimeName();
    return (
        <div className={classes.content_wrapper}>
            <h1>{timeName}</h1>
            <div>
                <div className={classes.tiles_wrapper}>
                    {
                        props.userAlbums.map((tile: UserAlbumType, i: number) => {
                            return <LongTile {...tile} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MainPage;
