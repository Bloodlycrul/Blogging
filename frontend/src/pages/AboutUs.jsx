import aboutImage from "../assets/aboutImage.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="m-auto mt-[50px] font-Inter text-[243.8px] text-center font-[700] border-y-2 border-white">
        <h1>Gaurav Rana</h1>
      </div>

      <div className="my-[80px]">
        <img
          className="w-full h-[700px] object-cover"
          src={aboutImage}
          alt=""
        />
        <div className="my-[30px]">
        <h1 className="text-[20px]">About Me</h1>
        <p className="text-slate-400 text-[16px]">
          As a passionate and experienced UI designer, I am dedicated to
          creating intuitive and engaging user experiences that meet the needs
          of my clients and their users. I have a strong understanding of design
          principles and a proficiency in design tools, and I am comfortable
          working with cross-functional teams to bring projects to fruition. I
          am confident in my ability to create designs that are both visually
          appealing and functional, and I am always looking for new challenges
          and opportunities to grow as a designer.
        </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
