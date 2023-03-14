import { Fragment } from "react";
import Head, { MyHeadingLittle as MHL, MyHeadingLittle2, MyHeadingLittle3 } from "./components/MyHeading";

function Application() {
  return (
    <Fragment>
      <div>
        <Head
          name="Devanshu"
          text="React App"
          price={2323}
        />
        <MHL />
        <MyHeadingLittle2 />
        <MyHeadingLittle3 />

        <h1>Welcome Page </h1>
        <p>Of React Course</p>
      </div>
    </Fragment>
  );
}
export default Application;
