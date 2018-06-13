import React from 'react'

const RoomList = () => {
    return (
        <div className="RoomList">
            <h2 style = {styles.roomList.h2}>Rooms</h2>
            <ul style = {styles.roomList.ul}>
                <li style = {styles.roomList.li}>
                    <a href="#" style = {styles.roomList.liA}>
                        general
                    </a>
                </li>
                <li style = {styles.roomList.li}>
                    <a href="#" style = {styles.roomList.liA}>
                        random
                    </a>
                </li>
            </ul>
        </div>
    )
}

const styles = {
    roomList: {
        h2: {
            fontSize: "1rem"
        },
        ul: {
            listStyle: "none",
            marginLeft: "0",
            paddingLeft: "0"
        },
        li: {
            marginBottom: "0.5rem"
        },
        liA: {
            display: "block",
            color: "whitesmoke",
            textDecoration: "none"
        }
    }
}

export default RoomList