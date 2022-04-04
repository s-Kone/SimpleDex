import React from "react";
import dynamic from 'next/dynamic'
import "swagger-ui-react/swagger-ui.css"

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {ssr: false});

export default () => <SwaggerUI url="https://alexgiasson.me/comp4537/termproject/api/v1/documentation"/>