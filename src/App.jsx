import "bootstrap/dist/css/bootstrap.min.css";
import SocialIcons from "./compononets/SocialIcon";
import Form from "./compononets/Form";
import "/src/styles/icons.css";
import "/src/styles/form.css";
import "/src/styles/app.css";

function App() {
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
