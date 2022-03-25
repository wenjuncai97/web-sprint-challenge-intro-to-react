// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledBorder = styled.div`
border-bottom: 1px solid ${pr => pr.theme.goodGuys};

display: flex;
justify-content: flex-start;

h2:hover {
    color: ${pr => pr.theme.goodGuys};
}

a {
    color: ${pr => pr.theme.goodGuysBlue}
}
a:hover {
    color: ${pr => pr.theme.badGuys};
    cursor: zoom-in;
}

h2 {
    color: ${pr => pr.theme.black}};
    padding-left: 1%;
}
`

const Character = (props) => {
    return (
        <StyledBorder>
        <div className="character">
            <h2>{`Name: `}<a href={`${props.info.url}`}>{props.info.name}</a>
            <br></br>
             Birth year: {props.info.birth_year}</h2>
        </div>
        </StyledBorder>
    )
}

export default Character;