import "./featuresStyle.scss"

function Features({img ,altimg,title,p}) {
    return(
        <div className="feature-item">
          <img src={img} alt={altimg} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {p}
          </p>
        </div>
    )
}

export default Features