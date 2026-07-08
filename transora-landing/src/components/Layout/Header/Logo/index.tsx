import { withBasePath } from "@/utils/urlHelper";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image
                src={withBasePath("/images/logo/logo.svg")}
                alt="Transora"
                width={184}
                height={40}
                style={{ width: "auto", height: "auto" }}
                quality={100}
            />
        </Link>
    );
};

export default Logo;
