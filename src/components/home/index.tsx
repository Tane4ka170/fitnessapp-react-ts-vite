import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage:(value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('min-width:1060px')
  return (
      <section id="home" className=" gap-16 bg-pink-20 py-10 md:h-full md:pb-0">
          {/* Image and header */}
          <div className="md:flex">
              {/* Main header */}
              <div>
                  {/* Headings */}
                  <div>
                      <div>
                        <div>
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                      </div>
                      <p>Ultimate Fitness Center. Exceptional Training Programs. State-of-the-art Studios for Achieving Your Dream Physique.
                          Transform Your Body Today.</p>
                  </div>
                  {/* Actions */}
                  <div>
                      <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                      <AnchorLink className=" text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                          <p>Learn more</p>
                      </AnchorLink>
                  </div>
              </div>
              {/* image */}
              <div>
                 <img src={HomePageGraphic} alt="home-pageGraphic" />
              </div>

          </div>
          {/* Sponsors */}
          {isAboveMediumScreens && (
              <div>
                  <div>
                      <img src={SponsorRedBull} alt="redbull" />
                      <img src={SponsorForbes} alt="forbes" />
                      <img src={SponsorFortune} alt="fortune" />
                  </div>
              </div>
          )}
    </section>
  )
}

export default Home