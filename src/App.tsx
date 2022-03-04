import React from 'react';
import classes from "./App.module.css";
import {connect} from "react-redux";
import Header from "./components/Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import Search from "./components/Search/Search";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import {AlbumType, UserAlbumType} from "./types";
import {AppStateType} from "./redux/redux-store";

const App = (props: PropsType) => {
    return (
        <>
            <main className={classes.app_wrapper}>
                <Navbar/>
                <div>
                    <Header/>
                    <div className={classes.content_wrapper}>
                        <Switch>
                            <Route exact path={"/"}>
                                <Redirect to={"/main"}/>
                            </Route>
                            <Route path={"/main"} render={() => <MainPage userAlbums={props.userAlbums}/>}/>
                            <Route path={"/search"}
                                   render={() => <Search albums={props.albums} topAlbums={props.topAlbums}/>}/>
                        </Switch>
                    </div>
                </div>
            </main>
        </>

    );
}

type MapStatePropsType = {
    userAlbums: Array<UserAlbumType>,
    topAlbums: Array<AlbumType>,
    albums: Array<AlbumType>,
}

type PropsType = MapStatePropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userAlbums: state.app.userAlbums,
        topAlbums: state.app.topAlbums,
        albums: state.app.albums,
    }
}

export default connect(mapStateToProps)(App);
