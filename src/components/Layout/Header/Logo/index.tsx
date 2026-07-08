import { withBasePath } from "@/utils/urlHelper";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center shrink-0">
            <Image
                src={withBasePath("/images/logo/logo.svg")}
                alt="Transora"
                width={168}
                height={44}
                className="h-9 sm:h-10 w-auto dark:hidden"
                priority
                quality={100}
            />
            <Image
                src={withBasePath("/images/logo/logo-white.svg")}
                alt="Transora"
                width={168}
                height={44}
                className="hidden h-9 sm:h-10 w-auto dark:block"
                priority
                quality={100}
            />
        </Link>
    );
};

export default Logo;
