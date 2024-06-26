import {
  CpuChipIcon,
  HomeIcon,
  HomeModernIcon,
  MapIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
export const menu = [
  {
    icon: <HomeIcon />,
    title: "Beranda",
    path: "/",
  },
  // {
  //   icon: <HomeIcon />,
  //   title: "Summary",
  //   path: "/summary",
  // },
  {
    icon: <HomeIcon />,
    title: "Tentang",
    path: "/unit-alokasi-air",
  },
  {
    icon: <HomeIcon />,
    title: "Wilayah Sungai",
    path: "/wilayah-sungai",
  },
  {
    icon: <HomeModernIcon />,
    title: "Sistem Interdependen",
    path: "/sistem-interdependen",
  },
  {
    icon: <CpuChipIcon />,
    title: "WTC",
    path: "/water-trip-control",
  },
  {
    icon: <PuzzlePieceIcon />,
    title: "Hydrorobotic",
    path: "/hydrorobotic",
  },
  {
    icon: <MapIcon />,
    title: "Virtual MAP",
    path: "/virtual-map",
  },
];
