import React, { Fragment } from "react";

// const MyHeading = (props)) => {
const MyHeading = ({ name, text, price = 200 }) => {

  // const a = props.text;

  const a = text;

  // alert(price);

  const obj = {
    main: "This is Main",
    footer: "this is Footer",
  };

  const { main, footer } = obj;

  return (

    <Fragment>

      {/* <h1>{props.name}</h1> */}
      <h1>{name}</h1>

      <h2>{a}</h2>

      <MyHeadingLittle value={price} />

      {/* <main>{obj.main}</main> */}
      {/* <footer>{obj.footer}</footer> */}

      <main>{main}</main>
      <footer>{footer}</footer>
      
      <MyHeadingLittle />

    </Fragment>
  );
};

export const MyHeadingLittle = ({ value }) => <h4>Heading 4 {value}</h4>;
export const MyHeadingLittle2 = () => <h5>Heading 5</h5>;
export const MyHeadingLittle3 = () => <h6>Heading 6</h6>;

export default MyHeading;

// export {MyHeadingLittle, MyHeadingLittle2, MyHeadingLittle3};
