import React from 'react';
import classes from "./MainPage.module.css";
import LongTile from "../common/Tile/LongTile";
import {UserAlbumType} from "../../types";

type OwnPropsType = {
    userAlbums: Array<UserAlbumType>
}

const MainPage = (props: OwnPropsType) => {
    const time = Intl.DateTimeFormat("ru", {hour: 'numeric'}).format(new Date());
    let nameTime = "";
    if (Number(time) < 6 && Number(time) >= 0)
        nameTime = "Спокойной ночи";
    if (Number(time) < 12 && Number(time) >= 6)
        nameTime = "Доброе утро";
    if (Number(time) < 18 && Number(time) >= 12)
        nameTime = "Продуктивного дня";
    if (Number(time) < 24 && Number(time) >= 18)
        nameTime = "Приятного вечера";
    return (
        <div className={classes.content_wrapper}>
            <h1>{nameTime}</h1>
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
