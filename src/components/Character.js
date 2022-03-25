// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledBorder = styled.div`
border: 1px solid #2FF924;

display: flex;
justify-content: flex-start;

h2:hover {
    color: #2FF924;
}
`

const Character = (props) => {
    return (
        <StyledBorder>
        <div className="character">
            <h2>Name: {props.info.name}<br></br> Birth year: {props.info.birth_year}</h2>
        </div>
        </StyledBorder>
    )
}

export default Character;