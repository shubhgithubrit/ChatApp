import * as React from 'react';
export const navigationRef = React.createRef();

export function navigate(name) {
    debugger;
    navigationRef.current?.navigate(name);
}