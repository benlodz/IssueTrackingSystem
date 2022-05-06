import React, {Component,useEffect,useReducer} from "react";
import "../assets/css/AdminPage.css"
import { DataTable } from 'primereact/datatable';
import baruch_logo from "../assets/icons/Baruch-College-Stacked-Logos/stacked-color.jpg";
import { Column } from 'primereact/column';
import issuefile from "../assets/data.json"
import { useNavigate} from "react-router-dom";
import {Button} from "primereact/button";


const init = initialState => initialState;

const reducer = (state, action) => {
    switch (action.type) {
        case "dataLoaded":
            return { ...state, results: action.payload, loading: false };
        default:
            throw new Error();
    }
};

export const AdminPage = () => {
    const initialState = {
        results: [],
        loading: true
    };
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const { results, loading } = state;

    useEffect(() => {
        if (loading) {
            dispatch({ type: "dataLoaded", payload: issuefile.data });
        }
    }, [loading]);

    return (

        <div>
            <div>
                <div className="container-1">
                    <img src={baruch_logo} className="baruch-logo" alt="baruch-logo" />
                    <div className="container-2">
                        <h1>Issue Tracking System | Admin Page</h1>
                    </div>
                </div>
            </div>
            <DataTable value={results}>
                <Column field="id" header="ID" />
                <Column field="category" header="Category" />
                <Column field="priority" header="Priority" />
                <Column field="status" header="Status"  />
            </DataTable>
        </div>
    );
};



export default AdminPage;