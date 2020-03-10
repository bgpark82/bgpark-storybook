import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { gray } from "../theme";

type SkeletonProps = {
    /** 높이 */
};

function Skeleton({}: SkeletonProps) {
    return <Block></Block>;
}

const shining = keyframes`
    0% {opacity:0.5}
    50% {opacity:1}
    100% {opacity:0.5}
`;

const Block = styled.div`
    background: ${gray.hover};
    height: 1rem;
    animation: ${shining} 1s ease-in-out infinite;
`;

export default Skeleton;
