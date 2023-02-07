import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['ignite-mid']};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme['shape-tertiary']};
  }

  body {
    /* background: ${(props) => props.theme['color-background']}; */
    /* width: 350px;
  height: 150px; */
  background: linear-gradient(0, #120c56, #000000);
    color: ${(props) => props.theme['text-base']};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  .stars{
    position: relative;
	width: 3px;
	height: 3px;
	border-radius: 50%;
	box-shadow: 50px 30px white,
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    320px 100px white;
    animation: anim-stars 10s linear infinite;
}
.stars::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white,
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    320px 100px white;
}
@keyframes anim-stars {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-150px);
    }
}
.stars2{
  position: relative;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
  animation: anim-stars 20s linear infinite;
}

.stars2::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
}


`
