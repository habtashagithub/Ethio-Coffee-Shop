import React from "react";
function Hero() {
  function orderNow() {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  }
  return (
    <main className="main" id="main">
      <section
        className="hero section"
        id="home"
        style={{
          backgroundImage: `url("https://i.ibb.co/b2Q89dj/Ethiopian-coffee-beans-1650x650.png")`,
        }}
      >
        <h1 className="hero__title">
          Start Your Day <br />
          With Fresh Ethiopian Coffee <br />
        </h1>
        <button class="hero__button" onClick={orderNow}>
          Order Now
        </button>
      </section>
    </main>
  );
}

export default Hero;
