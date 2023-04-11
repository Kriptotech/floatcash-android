import { useEffect, useState } from "react";
import Routes from "./src/Routes/Routes";
import { UpdateScreen } from "./src/screens/Update/index";

export default function CheckMobileVervion() {
    const [showUpdateScreen, setShowUpdateScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [link, setLink] = useState("");

    async function checkVersion() {
        fetch(`https://frail-fawn-belt.cyclic.app/check_current_mobile_version`)
            // await fetch(`http://192.168.42.29:3001/check_current_mobile_version`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data?.result?.current_version);

                if ("1.0.3" === data?.result?.current_version) {
                    // console.log("current version");
                    return;
                }

                setLink(data?.result?.download_link);
                setShowUpdateScreen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        checkVersion();
        setIsLoading(false);
    }, []);

    return (
        <>
            {showUpdateScreen === true ? (
                <UpdateScreen link={link} />
            ) : (
                isLoading === false && <Routes />
            )}
        </>
    );
}
