export default function ExpertiseSection() {
  return (
    <section id="expertise" className="s-expertise">
      <div className="row s-expertise__content width-sixteen-col">
        <div className="column xl-12 grid-block grid-section-split">
          <div className="section-header grid-section-split__header">
            <div className="text-pretitle">Expertise</div>
            <h2 className="text-display-title">My key areas of expertise.</h2>

            <p className="lead">
              With 5 years of experience in web development, I specialize
              in both Web2 and Web3 technologies, showcasing a versatile skill
              set that spans across traditional and decentralized ecosystems.
            </p>
          </div>

          <div className="s-expertise__content-main grid-section-split__primary">
            <div className="grid-list-items list-items show-ctr">
              <div className="grid-list-items__item list-items__item">
                <div className="grid-list-items__title list-items__item-header">
                  <h3 className="list-items__item-title">Web3 Development</h3>
                </div>
                <div className="grid-list-items__text list-items__item-text">
                  <p>
                    Being in the web3 space over the last 2-3 years, I&apos;ve
                    specialized in developing NFT marketplaces, crafting secure
                    wallets and decentralized exchanges. My
                    proficiency lies in writing Solidity smart contracts,
                    employing tools like Hardhat and Foundry to create resilient
                    and safe blockchain solutions.
                  </p>
                </div>
              </div>
              <div className="grid-list-items__item list-items__item">
                <div className="grid-list-items__title list-items__item-header">
                  <h3 className="list-items__item-title">
                    Frameworks and Technologies
                  </h3>
                </div>
                <div className="grid-list-items__text list-items__item-text">
                  <p>
                    I bring a comprehensive expertise in web and blockchain
                    development, leveraging JavaScript frameworks like NestJS
                    and NodeJS for backend systems, NextJS for frontend
                    interfaces, and React Native for cross-platform mobile
                    applications. Additionally, I excel in Solidity for writing
                    smart contracts, employing frameworks such as Hardhat and
                    Foundry for blockchain development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="s-expertise__content-btn grid-section-split__bottom">
            <a href="/services" className="btn btn--stroke u-fullwidth">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
