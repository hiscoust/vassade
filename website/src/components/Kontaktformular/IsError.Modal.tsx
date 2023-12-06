import React from 'react'

import { RootState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setMailSendingFailed } from '../Redux/reducers/MailStateReducer';


const IsErrorModal = () => {
  const isError = useSelector((state: RootState) => state.MailState.isError)
  const dispatch = useDispatch()

  if (!isError)
    return (<></>)

  return (<div className='fixed top-12 left-1/2 -translate-x-1/2 w-full' style={{ zIndex: 999 }}>
    <div className='mx-4'>
      <div className="bg-red-100 border-l-4 border-red-600 text-red-600 p-4 m-4 mx-auto rounded relative w-fit" role="alert">
        <p className="font-bold text-start text-xl">Entschuldigung</p>
        <p className='text-start'>Ein Fehler ist aufgetreten. Bitte versuche es erneut oder nutze unsere Kontaktdaten </p>
        <button className='absolute top-3 right-3 text-gray-700' onClick={() => dispatch(setMailSendingFailed(false))} >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </div>
  </div>)
}

export default IsErrorModal