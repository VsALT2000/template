import {AlbumType, UserAlbumType} from "../types";

let initialState = {
    userAlbums: [
        {
            label: 'Подкасты',
            link: "https://i.scdn.co/image/ab67706c0000da84a12d943d27b640e691ccbcd5",
        },
        {
            label: 'Рок',
            link: "https://i.scdn.co/image/ab67616d0000b2734da479f2e4d4e859071f460a",
        },
        {
            label: 'Любимые треки',
            link: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
        },
        {
            label: 'Phonk',
            link: "https://i.scdn.co/image/ab67706f000000026261af078554a4a0b051f7c1",
        },
    ] as Array<UserAlbumType>,
    topAlbums: [
        {
            label: 'Подкасты',
            type: "podcast",
        },
        {
            label: 'Рок',
            type: "rock",
        },
        {
            label: 'Любимые треки',
            type: "liked",
        },
        {
            label: 'Phonk',
            type: "phonk",
        },
    ] as Array<AlbumType>,
    albums: [
        {
            label: 'Подкасты',
            type: "podcast",
        },
        {
            label: 'Рок',
            type: "rock",
        },
        {
            label: 'Любимые треки',
            type: "liked",
        },
        {
            label: 'Phonk',
            type: "phonk",
        },
        {
            label: 'Метал',
            type: "metal",
        },
        {
            label: 'Классика',
            type: "classic",
        },
        {
            label: 'Новинки',
            type: "new",
        },
        {
            label: 'Радио',
            type: "radio",
        },
        {
            label: 'Подкасты',
            type: "podcast",
        },
        {
            label: 'Рок',
            type: "undefined_type",
        },
        {
            label: 'Любимые треки',
            type: "liked",
        },
        {
            label: 'Phonk',
            type: "phonk",
        },
        {
            label: 'Метал',
            type: "metal",
        },
        {
            label: 'Классика',
            type: "classic",
        },
        {
            label: 'Новинки',
            type: "new",
        },
        {
            label: 'Радио',
            type: "radio",
        },
    ] as Array<AlbumType>
}

type InitialStateType = typeof initialState;

const AppReducer = (state = initialState, action: {type: string}):InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default AppReducer;
