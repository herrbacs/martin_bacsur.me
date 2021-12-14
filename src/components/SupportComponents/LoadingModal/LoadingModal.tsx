import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

export const LoadingModal = () => {

const style: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, .6)',
    width: '100%',
    height: '100%',
}

  return (
    <div style={style}>
      <FontAwesomeIcon style={{margin:'auto', color:'#44546A'}} icon={faCog} size={'6x'} spin={true}/>
    </div>
  );
};
