import tw, { styled, css } from 'twin.macro';

export const Button = styled.button(({ purple }) => [
  tw`block rounded-lg m-3 px-4 py-3 text-center transition-all duration-300 ease-in-out`,

  purple &&
    css`
      background-image: linear-gradient(
        to right,
        #6441a5 0%,
        #3a0845 51%,
        #6441a5 100%
      );
      background-size: 200% auto;
      color: white;

      &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
      }
    `,
]);

// .btn-grad {background-image: linear-gradient(to right, #6441A5 0%, #2a0845  51%, #6441A5  100%)}
// .btn-grad {
//    margin: 10px;
//    padding: 15px 45px;
//    text-align: center;
//    text-transform: uppercase;
//    transition: 0.5s;
//    background-size: 200% auto;
//    color: white;
//    box-shadow: 0 0 20px #eee;
//    border-radius: 10px;
//    display: block;
//  }

//  .btn-grad:hover {
//    background-position: right center; /* change the direction of the change here */
//    color: #fff;
//    text-decoration: none;
//  }
