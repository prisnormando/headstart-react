/**
 * Created by rbachleitner on 6/27/17.
 */
import React from 'react';
import { observer } from 'mobx-react';
import { onListClick } from './ListEvents';

const ListEntry =
  observer(
    (props) => {
      let abstract = null;
      if (props.paper.clicked) {
        abstract =
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>;
      }
      return (
      <div style={{borderBottom: "2px grey solid", display: "block", padding: "10px"}}>
        <div><a href="#" onClick={onListClick.bind(this, props.paper)}>{props.paper.title}</a></div>
        {abstract}
        <div>Area: {props.paper.area}</div>
      </div>
        );
    }
  );

export default ListEntry;