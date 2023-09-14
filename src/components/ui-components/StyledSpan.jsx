import styled, { keyframes} from "styled-components"

const wave = keyframes`
  0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% {transform: rotate( 0.0deg) } 
  `

const StyledSpan = styled.span`
animation: ${wave} 5s linear infinite;
`


const Span = () => {
  return (
    <StyledSpan></StyledSpan>
  )
}

export default Span