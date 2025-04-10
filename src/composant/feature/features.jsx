import "./featuresStyle.scss"

function Features({img ,altimg,title,p}) {
    return(
        <div class="feature-item">
          <img src={img} alt={altimg} class="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>
            {p}
          </p>
        </div>
    )
}

export default Features