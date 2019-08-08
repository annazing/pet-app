import * as React from 'react';
import LoadingIndicator from '../loading-indicator/index';

const Notification = ({ loading, error, isShowInfo, infoText}) => {
  return (
    <div>
      { loading 
        ? <LoadingIndicator />
        :  <>
            { error.isError && <div>{error.message}</div> } 
            { isShowInfo && <div>{infoText}</div> }
           </>
      }
    </div>
  );
};

export default Notification;
