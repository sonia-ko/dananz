import React from "react";

import Subheading from "../../subheading/Subheading";
import LocationItem from "./LocationItem";
import {
  ourLocations,
  dananzEmail,
  dananzPhone,
  contactsToShow,
} from "@/static/companyData";
import classes from "./Locations.module.css";

const Locations: React.FC = () => {
  return (
    <section className="container">
      <Subheading text="Locations" />
      <div className={classes.container}>
        <div className={classes.headingBlock}>
          <h3 className="margin-b-m">Visit Our Stores</h3>
          <p className="text-gray text-size-s margin-b-m">
            Find us at these locations.
          </p>
          <ul>
            {contactsToShow.map((item) => {
              return (
                <li key={"our" + item.title} className={classes.contactList}>
                  <span className="margin-b-s text-size-m text-semibold">
                    {item.title}
                  </span>
                  <span className="text-gray text-size-s  margin-b-m">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={classes.locationsList}>
          {ourLocations.map((item) => {
            return (
              <LocationItem
                key={item.title}
                title={item.title}
                text={item.description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Locations;
