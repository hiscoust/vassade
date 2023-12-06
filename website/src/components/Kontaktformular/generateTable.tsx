import React from 'react'
import { renderToString } from 'react-dom/server';
import { QuestionsArray } from '../Carousel/interfaces';
import { ClientDataObject } from './Kontaktformular';

export const generateTable = (array: QuestionsArray[], title: string, clientdata: ClientDataObject) => {
    const Table =
        <>
            <div style={{
                border: '1px solid lightgray',
                backgroundColor: '#fcfcfc',
                padding: "2rem",
                width: "fit-content",
                textAlign: "left"
            }}>
                <div style={{ marginBottom: "2rem" }}>
                    <h1 style={{ fontSize: "18px", margin: 0, marginBottom: ".3rem" }} >Ihre Daten</h1>
                    <div style={{ marginLeft: ".3rem" }}>
                        <div style={{ fontSize: "15px" }}>Name: <span>{clientdata.gender + " " + clientdata.vorname + " " + clientdata.nachname}</span></div>
                        <div style={{ fontSize: "15px" }}>Telefonnummer: <a href='tel:+$tel'>{clientdata.tel}</a></div>
                        <div style={{ fontSize: "15px" }}>Email: <a href='mailto:$emailClient'>{clientdata.email}</a></div>
                        <div style={{ fontSize: "15px" }}>Ort: <span>{clientdata.plz + " " + clientdata.city}</span></div>
                    </div>
                </div>


                <h1 style={{ fontSize: "18px", margin: 0, marginBottom: ".3rem" }} >{title}</h1>
                {array?.map((page, pk) => {
                    return (
                        <div key={pk} style={{ marginBottom: ".6rem" }}>
                            <div style={{ marginLeft: ".3rem" }}>
                                <h4 style={{ fontWeight: 500, margin: 0, marginLeft: "2px" }} >{page.questionTitle}</h4>
                                {page.options.map((option, ok) => {
                                    return (

                                        <React.Fragment key={ok}>{
                                            option.checked &&
                                            <div style={{ fontWeight: 600 }}>
                                                - {option.optionTitle}
                                            </div>
                                        }
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    const TableString = renderToString(Table);
    return TableString
}