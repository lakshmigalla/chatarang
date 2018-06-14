import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import RoomLink from './RoomLink';

// function addRoom() {
//     <li className={css(styles.item)}>
//         <a href="#" className={css(styles.link)}>
//             {document.querySelector('input').value}
//         </a>
//     </li>
// }

class RoomList extends Component {
    state = {
        rooms: {
            general: {
                name: 'general',
                description: 'Chat about anything'
            },
            random: {
                name: 'random',
                description: 'Chat about memes'
            }
        }
    }
    render() {
        return (
            <nav className={`RoomList ${css(styles.nav)}`}>
                <h2 className={css(styles.h2)}>Rooms</h2>
                <ul className={css(styles.list)}>
                    
                    {/* <input
                        type="text"
                        id="addedRoom"
                        placeholder="Create new room"
                        className={css(styles.input)}
                    >
                    </input>
                    <button
                        type="submit"
                        className={css(styles.button)}
                        onClick={this.addRoom}
                    >
                        Add room
                    </button> */
                    Object.keys(this.state.rooms).map (
                        roomName => (
                            <RoomLink
                                key = { roomName }
                                room = {this.state.rooms[roomName]}
                                loadRoom = {this.props.loadRoom}
                            />
                        )
                    )
                    }
                </ul>
            </nav>
        )
    }
}


const styles = StyleSheet.create({
    nav: {
        padding: '0 1rem',
    },

    h2: {
        fontSize: '1rem',
    },

    list: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
    },

    // input: {
    //     flex: 1,
    //     fontSize: '0.8rem',
    //     border: 0,
    //     marginBottom: '0.5rem',

    //     ':focus': {
    //         outline: 0,
    //     },
    // },

    // button: {
    //     display: 'block',
    //     margin: '0 auto',
    //     padding: '1rem 2rem',
    //     fontSize: '1rem',
    //     borderRadius: '1rem',
    //     backgroundColor: '#253687',
    //     color: 'white',
    //     width: '9rem',

    //     ':hover': {
    //         backgroundColor: 'rgba(255, 255, 255, 0.2)',
    //     }
    // },
})

export default RoomList