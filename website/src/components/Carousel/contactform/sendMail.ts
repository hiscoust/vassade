"use client"

import axios from "axios"
import { setIsLoading, setMailSendingFailed, setMailStatusSucceed, } from "../../Redux/reducers/MailStateReducer";
import { AppDispatch } from "../../Redux/store";

export default function sendMail(dataObject: Object, dispatch: AppDispatch) {
    const url = "/backend/mailer.php"

    dispatch(setIsLoading(true))
    axios.post(url, dataObject, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }).then(res => {
        if (res.data.msgSent) {
            dispatch(setMailStatusSucceed(true))
            dispatch(setIsLoading(false))
            setTimeout(() => {
                dispatch(setMailStatusSucceed(false))
            }, 8000);
        }
        else {
            throw new Error(res.data);
        }
    }).catch(err => {
        console.log(err);
        dispatch(setMailSendingFailed(true))
        dispatch(setIsLoading(false))
        setTimeout(() => {
            dispatch(setMailSendingFailed(false))
        }, 8000);
    })
}