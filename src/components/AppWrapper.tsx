import React, {useMemo, CSSProperties} from "react";
import {isPlatform}from "@ionic/react"

export default function AppWrapper(props:{children:React.ReactNode}) {
   const styles =  useMemo(() => {
       if(isPlatform('desktop')){
           return {maxWidth:500,width: "100%",
            position: 'relative'} as CSSProperties
       }
        return {}
      }, [])
  return (
    <div
      style={{display:"flex",width: "100%",
      height: "100%",
      justifyContent: "center"}}
    >
        <div style={styles}>
      {props.children}</div>
    </div>
  );
}
