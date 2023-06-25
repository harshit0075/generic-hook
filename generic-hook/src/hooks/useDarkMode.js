import {useEffect, useState} from "react";
const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode]=useState(false);

    const toogleDarkMode=()=>{
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("user-dark-mode", !isDarkMode)
    };

    useEffect(()=>{
        const userPreference=JSON.parse(localStorage.getItem('user-dark-mode'));
        userPreference && setIsDarkMode(userPreference)
    },[])

    return [isDarkMode, toogleDarkMode]
};

export default useDarkMode;
