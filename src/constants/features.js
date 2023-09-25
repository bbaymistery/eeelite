import { AiOutlineLike, AiOutlineSafetyCertificate, } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

export const features = [
    {
        id: 1,
        headingKey: "globalShipping",
        subheadingKey: "globalShippingDescription",
        icon: <FaShippingFast />,
    },
    {
        id: 2,
        headingKey: "tailoredFor",
        subheadingKey: "tailoredForDescription",
        icon: <AiOutlineLike />,
    },
    {
        id: 3,
        headingKey: "superiorGrade",
        subheadingKey: "superiorGradeDescription",
        icon: <AiOutlineSafetyCertificate />,
    },
];
