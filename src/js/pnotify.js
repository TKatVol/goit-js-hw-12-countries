import { alert, notice, info, success, error, defaults} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';
defaults.animateSpeed = 'fast';
defaults.delay = 2000;

export function showInfo() {
    info({
        title: "🌍",
        text: "Where are you from? :)",
    });
}

export function showAlert() {
    alert({
        title: "🤔",
        text: "Too many matches found. Please enter a more specific query!",
    });
}

export function showNotice() {
    notice({
        title: "✈",
        text: "Continue typing to show more.. ",
    });
}


export function showSuccess() {
    success({
        title: "🏆",
        text: "Well done. You found! 👍",
    });
}

export function showError() {
    error({
       title: "😟",
        text: "Oops.. Not found :(", 
    });
}