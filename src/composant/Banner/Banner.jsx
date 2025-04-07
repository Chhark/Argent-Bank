import "./BannerStyle.scss"

function Banner({backgroundImg}) {
    const heroStyle ={
        backgroundImage: `url(${backgroundImg})`,
    }
    return(
        <div className="hero" style={heroStyle}>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    )
}

export default Banner