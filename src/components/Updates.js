import '../styles/updates.scss';
import {UPDATES_COUNT} from '../constants';
import {capitalize} from '../utils/commonFunctions';

import {CrossReferenceIcon} from '@primer/octicons-react';
import {formatDistance, format} from 'date-fns';
import {Fragment, useLayoutEffect} from 'react';
import {Send} from 'react-feather';

const newDate = new Date();
let currentDate = newDate;

function Updates({updates}) {
  useLayoutEffect(() => {
    currentDate = newDate;
  });

  return (
    <div className="updates">
      <div className="updates-header">
        <h4 className="title">{format(currentDate, 'd MMM')}</h4>
      </div>

      {updates
        .slice(-UPDATES_COUNT)
        .reverse()
        .map(function (activity, index) {
          activity.update = activity.update.replace(/\n/g, '<br/>');
          const activityDate = new Date(activity.timestamp * 1000);
          const addHeader = () => {
            currentDate = activityDate;

            return (
              <>
                {index === 0 ? (
                  <div className="update">
                    <h4>No updates yet!</h4>
                  </div>
                ) : (
                  ''
                )}
                <div className="updates-header">
                  <h2>{format(activityDate, 'd MMM')}</h2>
                </div>
              </>
            );
          };

          return (
            <Fragment key={index}>
              {activityDate.getDate() !== currentDate.getDate()
                ? addHeader()
                : ' '}
              <div key={index} className="update">
                <h6 className="date">
                  {capitalize(
                    formatDistance(
                      new Date(activity.timestamp * 1000),
                      new Date()
                    )
                  ) + ' ago'}
                </h6>
                <h5
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: activity.update,
                  }}
                ></h5>
              </div>
            </Fragment>
          );
        })}

      <a
        href="https://t.me/covid19indiaorg_updates"
        target="_blank"
        className="updates-footer"
        rel="noopener noreferrer"
      >
        <h5 className="message">Get updates on Telegram</h5>
        <CrossReferenceIcon />
      </a>
    </div>
  );
}

export default Updates;
