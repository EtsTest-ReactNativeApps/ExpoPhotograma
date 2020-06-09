import * as React from 'react';
import Saved from "./Saved";
import {useDispatch} from "react-redux";
import {SavedActions} from "../../redux/saved";

export const SavedScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(SavedActions.getSavedForUser());
    }, [dispatch]);

    return( <Saved navigation={navigation}/> )
};
