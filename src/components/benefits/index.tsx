import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";

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
        <div className="md:my-5 md:w-3/5">
          <HText>BEYOND THE ORDINARY GYM EXPERIENCE.</HText>
          <p className=" my-5 text-sm">
            Our top-tier fitness equipment, expert trainers, and diverse classes
            are dedicated to helping you achieve your fitness goals
            effortlessly. Every member receives genuine care and attention from
            us.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex ">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
