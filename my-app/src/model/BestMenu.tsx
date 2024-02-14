import React from "react";
import { Menu } from "./restaurant";


interface OwnProps extends Omit<Menu, 'price'>{
    showBestMenuName(name:string):string
}

// interface OwnProps extends Menu{
//     showBestMenuName(name:string):string
// }

// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }
// 위에 interface의 extends와 똑같음

const BestMenu:React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
    return (
        <div>{name}</div>
    )
}

export default BestMenu