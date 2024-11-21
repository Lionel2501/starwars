import React, { useEffect, useRef } from "react";

const ParallaxCard = () => {
  const cardRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const main = mainRef.current;

    if (!card || !main) return;

    const handleMouseMove = (event) => {
      const e = -(window.innerWidth / 2 - event.pageX) / 28;
      const n = (window.innerHeight / 2 - event.pageY) / 28;
      card.style.transform = `rotateY(${e}deg) rotateX(${n}deg)`;
      card.style.webkitTransform = `rotateY(${e}deg) rotateX(${n}deg)`;
      card.style.mozTransform = `rotateY(${e}deg) rotateX(${n}deg)`;
    };

    main.addEventListener("mousemove", handleMouseMove);

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="parallax_main" ref={mainRef} style={{ height: "80vh", overflow: "hidden" }}>
      <div
        // className="parallax_card"
        ref={cardRef}
        style={{
          "padding": "15px",
          "display": "flex",
          "justifyContent": "space-around",
          "width": "800px",
          "height": "500px",
          "margin": "auto",
          "borderRadius": "20px",
          "border": "1px solid #dadada",
          "boxShadow": "30px 30px 100px -49px #494848",
          "transformStyle": "preserve-3d",
          "transition": "transform .05s linear"
        }}
      >
          <div className="parallax_text_main">
            <h1 className="parallax_title">Bonjour ! Je suis Lionel,</ h1>
            <div className='parallax_text_contain'>
                <br></br>
                <div>Début dans la programmation informatique en 2019 en autodidacte, suivi d'études à l'université de Tandil.
                    <br />
                    <br />
                    Expérience dans le développement de systèmes intégrant à la fois le front-end et le back-end.
                    <br />
                    <small>tout droit reservés</small>
                </div>
            </div>
          </div> 
          <div style={{ "width": "300px"}}>
            <img style={{ "width": "300px"}} src="/files/avatar.png"/>
          </div>
      </div>
    </div>
  );
};

export default ParallaxCard;
