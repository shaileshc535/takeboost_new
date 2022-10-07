import { Typography, Grid } from "@mui/material";
import { useState, SetStateAction } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { React360Viewer } from "react-360-product-viewer";
import ThreeSixty from "react-360-view";

const Slider = () => {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(1);

  // const images = [
  //   require(`../../assets/bottel/01.webp`),
  //   require(`../../assets/bottel/02.webp`),
  //   require(`../../assets/bottel/03.webp`),
  //   require(`../../assets/bottel/04.webp`),
  //   require(`../../assets/bottel/05.webp`),
  //   require(`../../assets/bottel/06.webp`),
  //   require(`../../assets/bottel/07.webp`),
  //   require(`../../assets/bottel/08.webp`),
  //   require(`../../assets/bottel/09.webp`),
  //   require(`../../assets/bottel/10.webp`),
  //   require(`../../assets/bottel/11.webp`),
  //   require(`../../assets/bottel/12.webp`),
  //   require(`../../assets/bottel/13.webp`),
  //   require(`../../assets/bottel/14.webp`),
  //   require(`../../assets/bottel/15.webp`),
  //   require(`../../assets/bottel/16.webp`),
  //   require(`../../assets/bottel/17.webp`),
  //   require(`../../assets/bottel/18.webp`),
  //   require(`../../assets/bottel/19.webp`),
  //   require(`../../assets/bottel/20.webp`),
  //   require(`../../assets/bottel/21.webp`),
  //   require(`../../assets/bottel/22.webp`),
  //   require(`../../assets/bottel/23.webp`),
  //   require(`../../assets/bottel/24.webp`),
  //   require(`../../assets/bottel/25.webp`),
  //   require(`../../assets/bottel/26.webp`),
  //   require(`../../assets/bottel/27.webp`),
  //   require(`../../assets/bottel/28.webp`),
  //   require(`../../assets/bottel/29.webp`),
  //   require(`../../assets/bottel/30.webp`),
  //   require(`../../assets/bottel/31.webp`),
  //   require(`../../assets/bottel/32.webp`),
  //   require(`../../assets/bottel/33.webp`),
  //   require(`../../assets/bottel/34.webp`),
  //   require(`../../assets/bottel/35.webp`),
  //   require(`../../assets/bottel/36.webp`),
  //   require(`../../assets/bottel/37.webp`),
  //   require(`../../assets/bottel/38.webp`),
  //   require(`../../assets/bottel/39.webp`),
  //   require(`../../assets/bottel/40.webp`),
  //   require(`../../assets/bottel/41.webp`),
  //   require(`../../assets/bottel/42.webp`),
  //   require(`../../assets/bottel/43.webp`),
  //   require(`../../assets/bottel/44.webp`),
  //   require(`../../assets/bottel/45.webp`),
  //   require(`../../assets/bottel/46.webp`),
  //   require(`../../assets/bottel/47.webp`),
  //   require(`../../assets/bottel/48.webp`),
  //   require(`../../assets/bottel/49.webp`),
  //   require(`../../assets/bottel/50.webp`),
  //   require(`../../assets/bottel/51.webp`),
  //   require(`../../assets/bottel/52.webp`),
  //   require(`../../assets/bottel/53.webp`),
  //   require(`../../assets/bottel/54.webp`),
  //   require(`../../assets/bottel/55.webp`),
  //   require(`../../assets/bottel/56.webp`),
  //   require(`../../assets/bottel/57.webp`),
  //   require(`../../assets/bottel/58.webp`),
  //   require(`../../assets/bottel/59.webp`),
  //   require(`../../assets/bottel/60.webp`),
  //   require(`../../assets/bottel/61.webp`),
  //   require(`../../assets/bottel/62.webp`),
  //   require(`../../assets/bottel/63.webp`),
  //   require(`../../assets/bottel/64.webp`),
  //   require(`../../assets/bottel/65.webp`),
  //   require(`../../assets/bottel/66.webp`),
  //   require(`../../assets/bottel/67.webp`),
  //   require(`../../assets/bottel/68.webp`),
  //   require(`../../assets/bottel/69.webp`),
  //   require(`../../assets/bottel/70.webp`),
  //   require(`../../assets/bottel/71.webp`),
  //   require(`../../assets/bottel/72.webp`),
  //   require(`../../assets/bottel/73.webp`),
  //   require(`../../assets/bottel/74.webp`),
  //   require(`../../assets/bottel/75.webp`),
  //   require(`../../assets/bottel/76.webp`),
  //   require(`../../assets/bottel/77.webp`),
  //   require(`../../assets/bottel/78.webp`),
  //   require(`../../assets/bottel/79.webp`),
  //   require(`../../assets/bottel/80.webp`),
  //   require(`../../assets/bottel/81.webp`),
  //   require(`../../assets/bottel/82.webp`),
  //   require(`../../assets/bottel/83.webp`),
  //   require(`../../assets/bottel/84.webp`),
  //   require(`../../assets/bottel/85.webp`),
  //   require(`../../assets/bottel/86.webp`),
  //   require(`../../assets/bottel/87.webp`),
  //   require(`../../assets/bottel/88.webp`),
  //   require(`../../assets/bottel/89.webp`),
  //   require(`../../assets/bottel/90.webp`),
  //   require(`../../assets/bottel/91.webp`),
  //   require(`../../assets/bottel/92.webp`),
  //   require(`../../assets/bottel/93.webp`),
  //   require(`../../assets/bottel/94.webp`),
  //   require(`../../assets/bottel/95.webp`),
  //   require(`../../assets/bottel/96.webp`),
  //   require(`../../assets/bottel/97.webp`),
  //   require(`../../assets/bottel/98.webp`),
  //   require(`../../assets/bottel/99.webp`),
  //   require(`../../assets/bottel/100.webp`),
  //   require(`../../assets/bottel/101.webp`),
  //   require(`../../assets/bottel/102.webp`),
  //   require(`../../assets/bottel/103.webp`),
  //   require(`../../assets/bottel/104.webp`),
  //   require(`../../assets/bottel/105.webp`),
  //   require(`../../assets/bottel/106.webp`),
  //   require(`../../assets/bottel/107.webp`),
  //   require(`../../assets/bottel/108.webp`),
  //   require(`../../assets/bottel/109.webp`),
  //   require(`../../assets/bottel/110.webp`),
  //   require(`../../assets/bottel/111.webp`),
  //   require(`../../assets/bottel/112.webp`),
  //   require(`../../assets/bottel/113.webp`),
  //   require(`../../assets/bottel/114.webp`),
  //   require(`../../assets/bottel/115.webp`),
  //   require(`../../assets/bottel/116.webp`),
  //   require(`../../assets/bottel/117.webp`),
  //   require(`../../assets/bottel/118.webp`),
  //   require(`../../assets/bottel/119.webp`),
  //   require(`../../assets/bottel/120.webp`),
  //   require(`../../assets/bottel/121.webp`),
  //   require(`../../assets/bottel/122.webp`),
  //   require(`../../assets/bottel/123.webp`),
  //   require(`../../assets/bottel/124.webp`),
  //   require(`../../assets/bottel/125.webp`),
  //   require(`../../assets/bottel/126.webp`),
  //   require(`../../assets/bottel/127.webp`),
  //   require(`../../assets/bottel/128.webp`),
  //   require(`../../assets/bottel/129.webp`),
  //   require(`../../assets/bottel/130.webp`),
  //   require(`../../assets/bottel/131.webp`),
  //   require(`../../assets/bottel/132.webp`),
  //   require(`../../assets/bottel/133.webp`),
  //   require(`../../assets/bottel/134.webp`),
  //   require(`../../assets/bottel/135.webp`),
  //   require(`../../assets/bottel/136.webp`),
  //   require(`../../assets/bottel/137.webp`),
  //   require(`../../assets/bottel/138.webp`),
  //   require(`../../assets/bottel/139.webp`),
  //   require(`../../assets/bottel/140.webp`),
  //   require(`../../assets/bottel/141.webp`),
  //   require(`../../assets/bottel/142.webp`),
  //   require(`../../assets/bottel/143.webp`),
  //   require(`../../assets/bottel/144.webp`),
  //   require(`../../assets/bottel/145.webp`),
  //   require(`../../assets/bottel/146.webp`),
  //   require(`../../assets/bottel/147.webp`),
  //   require(`../../assets/bottel/148.webp`),
  //   require(`../../assets/bottel/149.webp`),
  //   require(`../../assets/bottel/150.webp`),
  //   require(`../../assets/bottel/151.webp`),
  //   require(`../../assets/bottel/152.webp`),
  //   require(`../../assets/bottel/153.webp`),
  //   require(`../../assets/bottel/154.webp`),
  //   require(`../../assets/bottel/155.webp`),
  //   require(`../../assets/bottel/156.webp`),
  //   require(`../../assets/bottel/157.webp`),
  //   require(`../../assets/bottel/158.webp`),
  //   require(`../../assets/bottel/159.webp`),
  //   require(`../../assets/bottel/160.webp`),
  //   require(`../../assets/bottel/161.webp`),
  //   require(`../../assets/bottel/162.webp`),
  //   require(`../../assets/bottel/163.webp`),
  //   require(`../../assets/bottel/164.webp`),
  //   require(`../../assets/bottel/165.webp`),
  //   require(`../../assets/bottel/166.webp`),
  //   require(`../../assets/bottel/167.webp`),
  //   require(`../../assets/bottel/168.webp`),
  //   require(`../../assets/bottel/169.webp`),
  //   require(`../../assets/bottel/170.webp`),
  //   require(`../../assets/bottel/171.webp`),
  //   require(`../../assets/bottel/172.webp`),
  //   require(`../../assets/bottel/173.webp`),
  //   require(`../../assets/bottel/174.webp`),
  //   require(`../../assets/bottel/175.webp`),
  //   require(`../../assets/bottel/176.webp`),
  //   require(`../../assets/bottel/177.webp`),
  //   require(`../../assets/bottel/178.webp`),
  //   require(`../../assets/bottel/179.webp`),
  //   require(`../../assets/bottel/180.webp`),
  //   require(`../../assets/bottel/181.webp`),
  //   require(`../../assets/bottel/182.webp`),
  //   require(`../../assets/bottel/183.webp`),
  //   require(`../../assets/bottel/184.webp`),
  //   require(`../../assets/bottel/185.webp`),
  //   require(`../../assets/bottel/186.webp`),
  //   require(`../../assets/bottel/187.webp`),
  //   require(`../../assets/bottel/188.webp`),
  //   require(`../../assets/bottel/189.webp`),
  //   require(`../../assets/bottel/190.webp`),
  //   require(`../../assets/bottel/191.webp`),
  //   require(`../../assets/bottel/192.webp`),
  //   require(`../../assets/bottel/193.webp`),
  //   require(`../../assets/bottel/194.webp`),
  //   require(`../../assets/bottel/195.webp`),
  //   require(`../../assets/bottel/196.webp`),
  //   require(`../../assets/bottel/197.webp`),
  //   require(`../../assets/bottel/198.webp`),
  //   require(`../../assets/bottel/199.webp`),
  //   require(`../../assets/bottel/200.webp`),
  //   require(`../../assets/bottel/201.webp`),
  //   require(`../../assets/bottel/202.webp`),
  //   require(`../../assets/bottel/203.webp`),
  //   require(`../../assets/bottel/204.webp`),
  //   require(`../../assets/bottel/205.webp`),
  //   require(`../../assets/bottel/206.webp`),
  //   require(`../../assets/bottel/207.webp`),
  //   require(`../../assets/bottel/208.webp`),
  //   require(`../../assets/bottel/209.webp`),
  //   require(`../../assets/bottel/210.webp`),
  //   require(`../../assets/bottel/211.webp`),
  //   require(`../../assets/bottel/212.webp`),
  //   require(`../../assets/bottel/213.webp`),
  //   require(`../../assets/bottel/214.webp`),
  //   require(`../../assets/bottel/215.webp`),
  //   require(`../../assets/bottel/216.webp`),
  //   require(`../../assets/bottel/217.webp`),
  //   require(`../../assets/bottel/218.webp`),
  //   require(`../../assets/bottel/219.webp`),
  //   require(`../../assets/bottel/220.webp`),
  //   require(`../../assets/bottel/221.webp`),
  //   require(`../../assets/bottel/222.webp`),
  //   require(`../../assets/bottel/223.webp`),
  //   require(`../../assets/bottel/224.webp`),
  //   require(`../../assets/bottel/225.webp`),
  //   require(`../../assets/bottel/226.webp`),
  //   require(`../../assets/bottel/227.webp`),
  //   require(`../../assets/bottel/228.webp`),
  //   require(`../../assets/bottel/229.webp`),
  //   require(`../../assets/bottel/230.webp`),
  //   require(`../../assets/bottel/231.webp`),
  //   require(`../../assets/bottel/232.webp`),
  //   require(`../../assets/bottel/233.webp`),
  //   require(`../../assets/bottel/234.webp`),
  //   require(`../../assets/bottel/235.webp`),
  //   require(`../../assets/bottel/236.webp`),
  //   require(`../../assets/bottel/237.webp`),
  //   require(`../../assets/bottel/238.webp`),
  //   require(`../../assets/bottel/239.webp`),
  //   require(`../../assets/bottel/240.webp`),
  //   require(`../../assets/bottel/241.webp`),
  //   require(`../../assets/bottel/242.webp`),
  //   require(`../../assets/bottel/243.webp`),
  //   require(`../../assets/bottel/244.webp`),
  //   require(`../../assets/bottel/245.webp`),
  //   require(`../../assets/bottel/246.webp`),
  //   require(`../../assets/bottel/247.webp`),
  //   require(`../../assets/bottel/248.webp`),
  //   require(`../../assets/bottel/249.webp`),
  //   require(`../../assets/bottel/250.webp`),
  //   require(`../../assets/bottel/251.webp`),
  //   require(`../../assets/bottel/252.webp`),
  //   require(`../../assets/bottel/253.webp`),
  //   require(`../../assets/bottel/254.webp`),
  //   require(`../../assets/bottel/255.webp`),
  //   require(`../../assets/bottel/256.webp`),
  //   require(`../../assets/bottel/257.webp`),
  //   require(`../../assets/bottel/258.webp`),
  //   require(`../../assets/bottel/259.webp`),
  //   require(`../../assets/bottel/260.webp`),
  //   require(`../../assets/bottel/261.webp`),
  //   require(`../../assets/bottel/262.webp`),
  //   require(`../../assets/bottel/263.webp`),
  //   require(`../../assets/bottel/264.webp`),
  //   require(`../../assets/bottel/265.webp`),
  //   require(`../../assets/bottel/266.webp`),
  //   require(`../../assets/bottel/267.webp`),
  //   require(`../../assets/bottel/268.webp`),
  //   require(`../../assets/bottel/269.webp`),
  //   require(`../../assets/bottel/270.webp`),
  //   require(`../../assets/bottel/271.webp`),
  //   require(`../../assets/bottel/272.webp`),
  //   require(`../../assets/bottel/273.webp`),
  //   require(`../../assets/bottel/274.webp`),
  //   require(`../../assets/bottel/275.webp`),
  //   require(`../../assets/bottel/276.webp`),
  //   require(`../../assets/bottel/277.webp`),
  //   require(`../../assets/bottel/278.webp`),
  //   require(`../../assets/bottel/279.webp`),
  //   require(`../../assets/bottel/280.webp`),
  //   require(`../../assets/bottel/281.webp`),
  //   require(`../../assets/bottel/282.webp`),
  //   require(`../../assets/bottel/283.webp`),
  //   require(`../../assets/bottel/284.webp`),
  //   require(`../../assets/bottel/285.webp`),
  //   require(`../../assets/bottel/286.webp`),
  //   require(`../../assets/bottel/287.webp`),
  //   require(`../../assets/bottel/288.webp`),
  //   require(`../../assets/bottel/289.webp`),
  //   require(`../../assets/bottel/290.webp`),
  //   require(`../../assets/bottel/291.webp`),
  //   require(`../../assets/bottel/292.webp`),
  //   require(`../../assets/bottel/293.webp`),
  //   require(`../../assets/bottel/294.webp`),
  //   require(`../../assets/bottel/295.webp`),
  //   require(`../../assets/bottel/296.webp`),
  //   require(`../../assets/bottel/297.webp`),
  //   require(`../../assets/bottel/298.webp`),
  //   require(`../../assets/bottel/299.webp`),
  //   require(`../../assets/bottel/300.webp`),
  // ];

  const handleChange = (newValue) => {
    let newData = (Number(newValue) * Number(360 / 300)).toFixed(0);

    if (newData === 0) {
      newData = 1;
    }

    setNumber(newData);
    setValue(newValue);
  };

  return (
    <>
      <React360Viewer
        imagesBaseUrl="../../assets/bottel/"
        imagesCount={10}
        imagesFiletype="png"
        mouseDragSpeed={20}
      />
      <ThreeSixty
        amount={10}
        imagePath="../../assets/bottel/"
        fileName="{index}.png"
      />
    </>
  );
};

export default Slider;