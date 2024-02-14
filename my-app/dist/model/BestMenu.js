import { jsx as _jsx } from "react/jsx-runtime";
// interface OwnProps extends Menu{
//     showBestMenuName(name:string):string
// }
// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }
// 위에 interface의 extends와 똑같음
const BestMenu = ({ name, category, showBestMenuName }) => {
    return (_jsx("div", { children: name }));
};
export default BestMenu;
