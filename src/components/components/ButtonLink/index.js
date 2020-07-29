import React from 'react';

function ButtonLink(props){
    console.log(props)
    return(

        <a className={props.className} href={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink