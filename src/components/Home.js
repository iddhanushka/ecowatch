import { Link } from "react-router-dom"

import phone from "../img/telephone-call.png"
import hotline from "../img/headset.png"
import location from "../img/gps-navigation.png"

function Home() {
  return (
    <>
      <section className="hero h-[90vh] bg-cover bg-center bg-no-repeat">
        <div className="container m-auto h-[90vh]">
          <div className="hero-context text-center relative top-[50%] translate-y-[-50%]">
            <h1 className="text-white text-[44px] font-bold max-w-[60%] m-auto mb-[30px] leading-normal">Report environmental crime efficiently</h1>
            <Link to="/register" className="bg-[#A9C83A] py-[12px] px-[20px] rounded text-black font-bold h-max">
              Report Now
            </Link>
          </div>
        </div>
      </section>

      <section className="how-works pt-[90px] pb-[120px]">
        <div className="container m-auto">
          <div className="how-work-context">
            <h2 className="text-black font-bold text-[30px] text-center mb-12">How it works</h2>
            <div className="working-steps grid grid-cols-3 gap-3">
              <div className="step bg-black/85 text-white px-[30px] py-[40px]">
                <h3 className="font-bold text-[20px] mb-5">Submit complain</h3>
                <p className="mb-0">Easily report incidents related to wildlife, forestry, and environmental crimes.</p>
              </div>
              <div className="step bg-black/85 text-white px-[30px] py-[40px]">
                <h3 className="font-bold text-[20px] mb-5">Submit complain</h3>
                <p className="mb-0">Attach images and videos as evidence to support your complaint.</p>
              </div>
              <div className="step bg-black/85 text-white px-[30px] py-[40px]">
                <h3 className="font-bold text-[20px] mb-5">Submit complain</h3>
                <p className="mb-0">Stay updated on the investigation status of your submitted complaint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact pt-[80px] pb-[110px] bg-black/80">
        <div className="container m-auto">
          <div className="contact-context text-white">
            <h4 className="text-[30px] text-center text-bold mb-12">Contact us</h4>
            <div className="contact-info max-w-[80%] m-auto flex justify-between">
              <ul className="quick-contact">
                <li className="mb-[20px]">
                  <ul className="flex gap-3">
                    <li>
                      <div className="icon">
                        <img src={phone} alt="telephone" className="w-full max-w-[20px] mt-[8px]" />
                      </div>
                    </li>
                    <li>
                      <h5 className="text-[22px] text-bold">Telephone</h5>
                      <a href="tel:+" className="text-[16px]">
                        011 1234567
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="mb-[20px]">
                  <ul className="flex gap-3">
                    <li>
                      <div className="icon">
                        <img src={hotline} alt="hotline" className="w-full max-w-[20px] mt-[8px]" />
                      </div>
                    </li>
                    <li>
                      <h5 className="text-[22px] text-bold">Hotline</h5>
                      <a href="tel:+" className="text-[16px]">
                        021 1234567
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="flex gap-3">
                    <li>
                      <div className="icon">
                        <img src={location} alt="address" className="w-full max-w-[20px] mt-[8px]" />
                      </div>
                    </li>
                    <li>
                      <h5 className="text-[22px] text-bold">Address</h5>
                      <p>1st lane, clave street, Colombo, SL</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="map float-right min-h-[300px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.945747289865!2d79.91723077442906!3d6.897092693102106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250aa85489b1f%3A0xd8773339b6b43dbb!2sDepartment%20of%20Wildlife%20Conservation!5e0!3m2!1sen!2slk!4v1703322036664!5m2!1sen!2slk" width="600" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="location-map"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
