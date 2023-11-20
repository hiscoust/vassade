import React from 'react'
import { renderToString } from 'react-dom/server';
import { QuestionsArray } from '../interfaces';

export const generateTable = (array: QuestionsArray[], title: string) => {
    const Table =
        <div>
            <div style={{
                border: '1px solid gray',
                backgroundColor: '#eee',
                borderRadius: '0.125rem',
                padding: "1rem",
                width: "fit-content",
                textAlign: "left"
            }}>
                <h1 style={{ fontSize: "30px", marginBottom: "1rem" }} >{title}</h1>
                {array?.map((page, pk) => {
                    return (
                        <div key={pk} style={{ marginBottom: "1rem" }}>
                            <h3 style={{ fontWeight: 600, margin: 0 }} >{page.questionTitle}</h3>
                            <>
                                {page.options.map((option, ok) => {
                                    return (

                                        <React.Fragment key={ok}>{
                                            option.checked &&
                                            <div style={{ marginLeft: "11px" }}>
                                                {option.optionTitle}
                                            </div>
                                        }
                                        </React.Fragment>
                                    )
                                })}
                            </>
                        </div>
                    )

                })}
            </div>
        </div>
    const TableString = renderToString(Table);
    return TableString
}