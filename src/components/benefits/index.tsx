import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Cutting-edge Facilities",
    description:
      "Discover our modern gym facilities designed for your success. With state-of-the-art equipment and innovative training programs, achieving your fitness goals has never been easier. Join us and experience the difference today.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "An Array of Varied Classes",
    description:
      "Explore a wide variety of classes tailored to your fitness needs. From cardio to strength training, there's something for everyone.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Professional and Skilled Trainers",
    description:
      "Experience personalized fitness guidance from our team of professional trainers who are dedicated to helping you reach your goals. With their expertise and passion for fitness, you'll receive tailored workouts, expert advice, and unwavering support every step of the way. Get ready to elevate your fitness journey with our exceptional trainers by your side.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>BEYOND THE ORDINARY GYM EXPERIENCE.</HText>
          <p className=" my-5 text-sm">
            Our top-tier fitness equipment, expert trainers, and diverse classes
            are dedicated to helping you achieve your fitness goals
            effortlessly. Every member receives genuine care and attention from
            us.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and description*/}
        <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className=" relative">
              <div className=" before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    COUNTLESS SATISFIED MEMBERS ACHIEVING FITNESS{" "}
                    <span className=" text-primary-500">GOALS</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Descr */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                At our fitness center, every day we witness countless satisfied
                clients achieving their fitness goals. Our team of professionals
                works diligently to provide you with the perfect environment to
                reach your fitness milestones.
              </p>
              <p className="my-5">
                Join us today and experience the benefits of workouts that lead
                to real results! Whether you're aiming to build strength,
                improve endurance, or enhance overall wellness, we're here to
                support you every step of the way.
              </p>
            </motion.div>
            {/* Button */}
            <div className=" relative mt-16">
              <div className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
