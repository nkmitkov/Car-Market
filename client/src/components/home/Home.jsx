import CustomBanner from "../banners/CustomBanner";
import MenArea from "./MenArea";
import TrendsArea from "./TrendsArea";
import WomenArea from "./WomenArea";

export default function Home() {

    return (
        <>
            <CustomBanner page="home" showCatalogButtons={true} />

            <MenArea />

            <WomenArea />

            <TrendsArea />
        </>
    );
};