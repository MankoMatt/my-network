import React, {useState} from "react";

const StatusProfHook = (props) => {

        let [status, setStatus] = useState(props.status)
        let [editMode, seteditMode] = useState(false)

        const onMode = () => {
                seteditMode(true)
        }

        const offMode = () => {
                seteditMode(false)

                props.setUpStatus(status)

        }

        const onTuk = (e) => {

                setStatus(e.currentTarget.value)
        }


        return (
            <>
        {!editMode &&
            <div>
                <span onDoubleClick={onMode}>{props.status == '' ? '---' : status}</span>
            </div>}
        {editMode &&
            <div>
                <input onChange={onTuk} onBlur={offMode} autoFocus={true} value={status}/>
            </div>}
        </>
        )}


export default StatusProfHook