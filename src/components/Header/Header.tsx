import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
            <header className={classes.app_header}>
                <input className={classes.search_input} placeholder={"Исполнитель, трек или плейлист"}/>
                <button className={classes.profile}>
                    <div className={classes.image_container}>
                        <div className={classes.image}/>
                    </div>
                    <span>Сергей Кашкин</span>
                </button>
            </header>

    );
}

export default Header;
