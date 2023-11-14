import React from "react";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../top-bar";

const LayoutComponent = ({children}: ILayout) => {
    return (
        <div>
            <TopBarComponent></TopBarComponent>
            {children}
        </div>
    );
};

export default LayoutComponent;