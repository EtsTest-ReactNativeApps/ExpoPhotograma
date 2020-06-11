import * as React from 'react';
import Saved from "./Saved";
import {useDispatch} from "react-redux";
import {LikeActions} from "../../redux/likes";

export const SavedScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(LikeActions.fetchLikes());
    }, [dispatch]);

    return( <Saved navigation={navigation}/> )
};
