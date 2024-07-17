export default function ClientsSection() {
  return (
    <section id="clients" className="s-clients">
      <div className="row s-clients__content-block width-sixteen-col">
        <div className="column xl-12 grid-block grid-section-split">
          <div className="section-header grid-section-split__header">
            <h2 className="text-pretitle">Clients</h2>

            <h2 className="text-display-title">
              I have had the privilege of working with these incredible brands.
            </h2>
          </div>

          <div className="grid-section-split__primary">
            <p className="lead">
              I'm not just a developer; I'm a digital dreamweaver. Crafting
              immersive online experiences is not just a job but my calling.
              And that is what I have done for the ideas my clients had.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              numquam molestiae vel quaerat quas facilis voluptates rerum
              aspernatur quam voluptatem ea, vitae illo, omnis minus vero minima
              maiores quia nihil incidunt provident debitis ab qui quasi. Iure
              unde numquam in nulla praesentium nesciunt dolore exercitationem,
              odit expedita minima quisquam ullam ex.
            </p>
          </div>
        </div>
      </div>

      <div className="row s-clients__content-block width-sixteen-col">
        <div className="column xl-12">
          <div className="clients-list">
            <div className="clients-list__item">
              <a href="#0">
                <img src="images/clients/flash.svg" alt="" />
              </a>
            </div>
            <div className="clients-list__item">
              <a href="#0">
                <img src="images/clients/rise.svg" alt="" />
              </a>
            </div>
            <div className="clients-list__item">
              <a href="#0">
                <img src="images/clients/cactus.svg" alt="" />
              </a>
            </div>
            <div className="clients-list__item">
              <a href="#0">
                <img src="images/clients/pinpoint.svg" alt="" />
              </a>
            </div>
            <div className="clients-list__item">
              <a href="#0">
                <img src="images/clients/proline.svg" alt="" />
              </a>
            </div>
            {/* <div className="clients-list__item">
                        <a href="#0">
                            <img src="images/clients/vision.svg" alt=""/>
                        </a>
                    </div>
                    <div className="column clients-list__item">
                        <a href="#0">
                            <img src="images/clients/volume.svg" alt=""/>
                        </a>
                    </div>
                    <div className="column clients-list__item">
                        <a href="#0">
                            <img src="images/clients/hitech.svg" alt=""/>
                        </a>
                    </div> */}
          </div>
        </div>
      </div>

      <div className="row s-clients__content-block width-sixteen-col">
        <div className="column xl-12 testimonials">
          <div className="swiper-container testimonials__slider home-slider">
            <div className="swiper-wrapper">
              <div className="testimonials__slide swiper-slide">
                <p>
                  Molestiae incidunt consequatur quis ipsa autem nam sit enim
                  magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                  dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                  rem nihil nostrum. Laudantium quia consequatur molestias.
                </p>
                <div className="testimonials__author">
                  <img
                    src="images/avatars/user-01.jpg"
                    alt="Author image"
                    className="testimonials__avatar"
                  />
                  <cite className="testimonials__cite">
                    <strong>John Rockefeller</strong>
                    <span>Standard Oil Co.</span>
                  </cite>
                </div>
              </div>
              <div className="testimonials__slide swiper-slide">
                <p>
                  Nisi dolores quaerat fuga rem nihil nostrum. Molestiae
                  incidunt consequatur quis ipsa autem nam sit enim magni.
                  Voluptas tempore rem. Laudantium quia consequatur molestias.
                  Explicabo a quaerat sint autem dolore ducimus ut consequatur
                  neque.
                </p>
                <div className="testimonials__author">
                  <img
                    src="images/avatars/user-04.jpg"
                    alt="Author image"
                    className="testimonials__avatar"
                  />
                  <cite className="testimonials__cite">
                    <strong>Andrew Carnegie</strong>
                    <span>Carnegie Steel Co.</span>
                  </cite>
                </div>
              </div>
              <div className="testimonials__slide swiper-slide">
                <p>
                  Voluptas tempore rem. Molestiae incidunt consequatur quis ipsa
                  autem nam sit enim magni. Explicabo a quaerat sint autem
                  dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                  rem nihil nostrum. Laudantium quia consequatur molestias.
                </p>
                <div className="testimonials__author">
                  <img
                    src="images/avatars/user-06.jpg"
                    alt="Author image"
                    className="testimonials__avatar"
                  />
                  <cite className="testimonials__cite">
                    <strong>Henry Ford</strong>
                    <span>Ford Motor Co.</span>
                  </cite>
                </div>
              </div>
              <div className="testimonials__slide swiper-slide">
                <p>
                  Molestiae incidunt consequatur quis ipsa autem nam sit enim
                  magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                  dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                  rem nihil nostrum. Laudantium quia consequatur molestias.
                </p>
                <div className="testimonials__author">
                  <img
                    src="images/avatars/user-02.jpg"
                    alt="Author image"
                    className="testimonials__avatar"
                  />
                  <cite className="testimonials__cite">
                    <strong>John Morgan</strong>
                    <span>JP Morgan & Co.</span>
                  </cite>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
