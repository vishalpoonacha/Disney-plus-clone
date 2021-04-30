import styled from "styled-components"

const Detail = (props)=>{
    return(
        <div>
            <Container>
                <Background>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=""/>
                </Background>
                </Container>
        </div>
    )
}

const Container=styled.div`
    position:relative;
    min-height:calc(100vh-250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw +5px);
`;

const Background = styled.div`
    left:0px;
    opacity:0.8;
    position:fixed;
    right:0px;
    top:0px;
    z-index:-1;

    img{
        width:100vw;
        height:100vh;

    }

    @media (max-width:768px){
        width:initial;
    }

`;

export default Detail;