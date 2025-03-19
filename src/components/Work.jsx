// variants
import { fadeIn } from "../variants";
// imgs
import Img1 from "../assets/portfolio-img-1 (2).png";
import Img2 from "../assets/portfolio-img-2 (2).png";
import Img3 from "../assets/portfolio-img-3 (2).png";
import Img4 from "../assets/portfolio-img-4 (2).png";
import Img5 from "../assets/portfolio-img-5 (2).png";
import Img6 from "../assets/portfolio-img-6 (2).png";
import Img7 from "../assets/portfolio-img-7 (2).png";
import Img8 from "../assets/portfolio-img-8 (2).png";
import Img9 from "../assets/portfolio-img-9 (2).png";
import Img10 from "../assets/NftMinting.png";
import Img11 from "../assets/E-Commerce.png";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <>
      <section className="section" id="work">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10 mb-10">
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              {/* text */}
              <div>
                <h2 className="h2 leading-tight text-[#006dff]">
                  {" "}
                  My Latest <br /> Work{" "}
                </h2>
                <p className="max-w-sm mb-10">
                  {" "}
                  These are my recent projects i've been working on with my
                  frontend development skills, using reactjs, tailwindcss and
                  lots more.
                </p>
                <button className="btn btn-sm">
                  <Link smooth={true} spy={true} to="moreProjects">
                    View more
                  </Link>
                </button>
              </div>
            
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1 h-60">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-20 transition-all duration-500 z-50">
                <a href="https://tcrowntube.vercel.app/" target="_blank">
                    <span className="text-gradient text-3xl">CROWNTUBE</span>
                </a>
                </div>
                {/* title */}
                <div className="absolute -bootom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-white text-xl">
                    This is a youtube clone where you can watch any movie of
                    your choice
                </span>
                </div>
            </div>
            </div>
            <div
              className="flex-1 flex flex-col gap-y-10 justify-between"
            >
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[42%]">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  src={Img2}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-16 lg:group-hover:top-20 transition-all duration-500 z-50">
                  <a href="https://linkedin-clone-seven-tau.vercel.app/" target="_blank">
                    <span className="text-gradient  text-3xl">Linkedin-clone</span>
                  </a>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-3 lg:group-hover:bottom-6 transition-all duration-700 z-50">
                  <span className="text-white text-xl">
                    This application helps helps you to put your self out there, seek for jobs.
                  </span>
                </div>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl  h-[42%]">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  src={Img11}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-16 lg:group-hover:top-20 transition-all duration-500 z-50">
                  <a href="https://e-commerce-flax-seven-26.vercel.app/" target="_blank">
                    <span className="text-gradient text-3xl">E-Commerce</span>
                  </a>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-3 lg:group-hover:bottom-6 transition-all duration-700 z-50">
                  <span className="text-white text-xl">
                  An E-commerce app where you can buy and sell produ
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl  h-[42%]">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  src={Img3}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-16 lg:group-hover:top-20 transition-all duration-500 z-50">
                  <a href="https://todo-list-sepia-gamma.vercel.app/" target="_blank">
                    <span className="text-gradient text-3xl">TODO LIST</span>
                  </a>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-3 lg:group-hover:bottom-6 transition-all duration-700 z-50">
                  <span className="text-white text-xl">
                  To-do lists help keep tasks organized in a clear and concise way, making it easy to see what needs to be done.
                  </span>
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>
    <section className="section" id="moreProjects">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-y-10">
            <h2
              className="h2 leading-tight text-[#ebebeb] text-center"
            >
              More Projects
            </h2>
            <div className="flex flex-col gap-y-10">
              <div
                className="flex-1 flex flex-col lg:flex-row gap-x-10 gap-y-10"
              >
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img7}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://quiz-project-sage.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient text-2xl">QuizApp</span>
                    </a>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img8}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href="https://classwork-project.vercel.app/" target="_blank">
                      <span className="text-gradient text-2xl">Contact Form</span>
                    </a>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img9}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://flex-box-layout-three.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient  text-2xl">flex-box-layout</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 flex flex-col lg:flex-row gap-x-10  gap-y-10"
              >
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img5}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href="https://easybuy-assignment.vercel.app/" target="_blank">
                      <span className="text-gradient  text-2xl">
                        EasyBank
                      </span>
                    </a>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img6}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://multi-form-puce.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient  text-2xl">Multi-form</span>
                    </a>
                  </div>
                </div>
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img10}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://minted-nft-five.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient  text-2xl">NFT-MINTING</span>
                    </a>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img4}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href="https://music-app-alpha-livid.vercel.app/" target="_blank">
                      <span className="text-gradient  text-2xl">Music App</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
)
}

export default Work