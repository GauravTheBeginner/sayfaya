import car from "@/public/image/steps/car.svg";
import map from "@/public/image/steps/map.svg";
import car2 from "@/public/image/steps/car2.svg";
import calender from "@/public/image/steps/calender.svg";

export const steps = [
    { 
        title:"Select Your Location",
        icon: map,
        alt: "map",
    },
    { 
        title:"Book Your Service",
        icon: calender,
        alt: "calender",
    },
    { 
        title:"Service in Progress",
        icon: car,
        alt: "car",
    },
    { 
        title:"Cleaning Complete",
        icon: car2,
        alt: "car2",
    },
]