const Icon = ({ icon, ExtraClass = "flex-column justify-content-center" }) => {
  return (
    <>
      <a
        href={`https://${icon.alink}.com`}
        className={`icon-container d-flex align-items-center justify-content-center border p-2 pe-3 ps-3 d-flex rounded-4 text-decoration-none transition transition-1000 ${ExtraClass} alink`}
        key={icon.alink}
      >
        <span className="d-flex flex-grow-1 align-items-center justify-content-end p-2 ispan">
          <i
            class={`fab fa-${icon.ilink} fs-2 text-white`}
            key={icon.ilink}
          ></i>
        </span>
        <span className="text-center text-white" key={icon.name}>
          {icon.name}
        </span>
      </a>
    </>
  );
};

const SocialIcons = () => {
  const IconsName = ["Facebook", "Instagram", "Youtube", "Telegram"];
  const IconsAlink = ["facebook", "instagram", "youtube", "telegram"];
  return (
    <>
      <section
        className="border d-flex flex-column p-4 gap-4 leftsection rounded-3 shadow-lgy"
        key={"section2"}
      >
        <span className="fs-4 text-dark fw-bold ms-4 me-4" key={"spanh3"}>
          Help us build the Largest CAT communities
        </span>
        {
          <Icon
            key={"Whatsapp"}
            icon={{
              name: "Whatsapp",
              alink: "whatsapp",
              ilink: "whatsapp",
            }}
            ExtraClass="flex-row-reverse justify-content-between m-4 mb-0 mt-0"
          />
        }
        <div
          className="bottomsection d-grid gap-5 p-4 pt-0"
          key={"bottomsection"}
        >
          {IconsAlink.map((a, index) => {
            return (
              <Icon
                key={a}
                icon={{
                  name: IconsName[index],
                  alink: a,
                  ilink: IconsName[index].toLowerCase(),
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SocialIcons;
