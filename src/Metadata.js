import React from 'react'

const Metadata = (props) => {
    return (
        <div class="Metadata" style = {styles.metadata}>
            <div class="user" style = {styles.metadata.user}>{props.message.userName}</div>
            <div class="time" style = {styles.metadata.time}>1:24 PM</div>
        </div>
    )
}

const styles = {
    metadata: {
        display: "flex",
        alignItems: "baseline",

        user: {
            fontWeight: "bold",
            marginRight: "0.5rem"
        },

        time: {
            color: "#999",
            fontSize: "0.8rem"
        }
    }
}

export default Metadata