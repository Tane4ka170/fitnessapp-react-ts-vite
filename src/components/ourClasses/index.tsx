import { motion } from "framer-motion";
import { ClassType, SelectedPage } from "@/shared/types";
import Class from "./Class";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";

const classes: Array<ClassType> = [
  {
    name: "Weight train",
    description:
      "Transform your strength and sculpt your body with our intense Weight Training Classes, tailored to help you reach your fitness goals faster and more efficiently.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover inner peace and enhance flexibility with our rejuvenating Yoga Classes, designed to harmonize mind, body, and spirit.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Sculpt and strengthen your core with precision in our Ab Core Classes, dedicated to achieving a toned and defined midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on exhilarating fitness journeys and explore new horizons with our invigorating Adventure Classes, designed to push boundaries and ignite your sense of adventure.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Experience a diverse range of workouts and achieve your fitness goals with our dynamic Fitness Classes, led by expert instructors in a motivating environment.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Master new skills and reach your fitness peak with our comprehensive Training Classes, designed to challenge and empower you every step of the way.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className=" w-full bg-primary-100  py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className=" mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {" "}
          <div className=" md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className=" py-5">
              "Our classes offer a dynamic and engaging workout experience
              designed to cater to all fitness levels. From high-intensity
              interval training to relaxing yoga sessions, we have something for
              everyone. Join our expert instructors and fellow members as we
              embark on a journey to achieve our fitness goals together. Explore
              our diverse class schedule and discover the perfect fit for your
              fitness routine. Get ready to sweat, challenge yourself, and
              unleash your full potential with Our classes.
            </p>
          </div>
        </motion.div>
        <div className=" mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name} - ${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
