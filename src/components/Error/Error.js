import React from "react";
import Button from "@mui/material/Button";
import style from "./error.module.css"

const Error = ({errors})  => {
    return <div className={style.errorBlock}>
        <h1>Error!</h1>
        {Array.isArray(errors) ? errors.map(e => <div className={style.errorItem}> {e} </div>)
            : <div className={style.errorItem}>{errors}</div>}
        <Button href="/" variant="contained">Go to Home Page</Button>
    </div>
}

export default Error