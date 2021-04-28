import styled from 'styled-components';

const Viewers =(props) =>{
    return(
        <Container>
           <Wrap>
               <img src="/images/viewers-disney.png" alt=""/>
           </Wrap>
           <Wrap>
               <img src="/images/viewers-marvel.png" alt=""/>
           </Wrap>
           <Wrap>
               <img src="/images/viewers-national.png" alt=""/>
           </Wrap>
           <Wrap>
               <img src="/images/viewers-pixar.png" alt=""/>
           </Wrap>
           <Wrap>
               <img src="/images/viewers-starwars.png" alt=""/>
           </Wrap>
        </Container>
    )


}

const Container=styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(5, minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr));
    }

`;

const Wrap = styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow:rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow:hidden;
    position:relative;

`;

export default Viewers;