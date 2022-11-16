import Image from "next/future/image";
import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/logo.svg"
import Link from "next/link";
import { Cart } from "../Cart";

export function Header(){
    return (
        <HeaderContainer>
        <Link href="/">
        <a>
        <Image src={LogoImg} alt=""/>
        </a>
        </Link>

        <Cart />
      </HeaderContainer>
    )
}