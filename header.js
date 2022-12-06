import React from 'react';
import * as style from "./styles/Home.module.css"
import Link from "next/link";
import {LINKS} from "./API";

export const Header = () => {

    return <div className={style.header}>
        <Link  href={"/"}>
            id {LINKS.play1}
        </Link>
        <br/>
        <Link  href={"/anotherId"}>
            id {LINKS.play2}
        </Link>
        <br/>
    </div>
};

