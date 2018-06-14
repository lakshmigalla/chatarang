import React from 'react'

import { StyleSheet, css } from 'aphrodite'

function addRoom () {
    <li className={css(styles.item)}>
        <a href="#" className={css(styles.link)}>
            {document.querySelector('input').value}
        </a>
    </li>
}

const RoomList = (props) => {
    return (
        <nav className = {`RoomList ${css(styles.nav)}`}>
            <h2 className = {css(styles.h2)}>Rooms</h2>
            <ul className = {css(styles.list)}>
                <li className={css(styles.item)}>
                    <a href="#" className={css(styles.link)}>
                        general
                    </a>
                </li>
                <li className={css(styles.item)}>
                    <a href="#" className={css(styles.link)}>
                        random
                    </a>
                </li>
                <input 
                    type = "text" 
                    id = "addedRoom" 
                    placeholder = "Create new room"
                    className={css(styles.input)}
                >
                </input>
                <button 
                    type = "submit" 
                    className = {css(styles.button)} 
                    onClick = {this.addRoom} 
                >
                    Add room
                </button>
            </ul>
            
        </nav>
    )
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
  
    item: {
      marginBottom: '0.5rem',
    },
  
    link: {
      display: 'block',
      color: 'whitesmoke',
      textDecoration: 'none',
  
      '::before': {
        content: '"# "',
      },
  
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    },

    input: {
        flex: 1,
        fontSize: '0.8rem',
        border: 0,
        marginBottom: '0.5rem',

        ':focus': {
            outline: 0,
        },
    },

    button: {
        display: 'block',
        margin: '0 auto',
        padding: '1rem 2rem',
        fontSize: '1rem',
        borderRadius: '1rem',
        backgroundColor: '#253687',
        color: 'white',
        width: '9rem',

        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }
      },
  })

export default RoomList