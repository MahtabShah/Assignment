import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialIcons from "./compononets/SocialIcon";
import Form from "./compononets/Form";
import "/src/styles/icons.css";
import "/src/styles/form.css";
import "/src/styles/app.css";

function App() {
  const [ConditionWd, setConditionWd] = useState(window.innerWidth > 800);
  const mainElementRef = useRef(null);
  useEffect(() => {
    const handelResize = () => {
      setConditionWd(window.innerWidth > 800);
    };

    window.addEventListener("resize", handelResize);

    // if (mainElementRef.current) {
    //   if (ConditionWd) {
    //     if (!mainElementRef.current.classList.contains("m-5")) {
    //       mainElementRef.current.classList.add("m-5");
    //     }
    //   } else {
    //     if (mainElementRef.current.classList.contains("m-5")) {
    //       mainElementRef.current.classList.remove("m-5");
    //     }
    //   }
    // }
  }, []);

  useEffect(() => {
    if (mainElementRef.current) {
      ["m-5"].forEach((cls) => {
        mainElementRef.current.classList.toggle(cls, ConditionWd);
      });
    }
  }, [ConditionWd]);

  return (
    <>
      <div className="container row p-4 m-4 d-flex justify-content-between align-items-center flex-row-reverse">
        <section className="section1 col-lg-6 col-sm-12 col-xs-12 p-3">
          <Form></Form>
        </section>
        <section className="section2 col-lg-5 col-sm-12 col-xs-12 p-3">
          <SocialIcons></SocialIcons>
        </section>
      </div>
    </>
  );
}

export default App;
