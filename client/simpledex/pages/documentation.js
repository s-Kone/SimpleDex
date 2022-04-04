import React from "react";
import dynamic from 'next/dynamic'
import "swagger-ui-react/swagger-ui.css"
import J from '../pages'

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {ssr: false});
export default () => <SwaggerUI url=""/>