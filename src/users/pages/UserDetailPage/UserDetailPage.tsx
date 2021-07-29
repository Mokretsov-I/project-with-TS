import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";

import { Loader } from "components/Loader";
import { useUsersContext } from "users/context/users-context";
import { DetailInfo } from "users/components/DetailInfo";
import { Tabs } from "users/components/Tabs";
import { Users } from "users/modals";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBuilding,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneAlt,
  faHome,
  faSitemap,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./UserDetailPage.scss";

export const UserDetailPage: React.FC = () => {
  const { users, isLoading } = useUsersContext();
  const { id } = useParams<{ id: string }>();
  const user = useMemo(
    () => Array.isArray(users) ? users.find((u: Users) => u.id === parseInt(id)) : null,
    [users, id]
  );

  if (isLoading) return <Loader />;

  if (!user) return <>Пользовтель с id: {id} не найден</>;

  return (
    <div className="user-detail">
      <NavLink to="/" className="back-link">
        <FontAwesomeIcon icon={faArrowLeft} /> Назад
      </NavLink>
      <h1>{user.username}</h1>
      <div className="info">
        <ul className="info__person">
          <li>
            <DetailInfo
              icon={<FontAwesomeIcon icon={faUser} />}
              body={{ value: user.name, type: "text" }}
              title="Name"
            />
          </li>
          <li>
            <DetailInfo
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              body={{ value: user.email, type: "email" }}
              title="Email"
            />
          </li>
          <li>
            <DetailInfo
              icon={<FontAwesomeIcon icon={faPhoneAlt} />}
              body={{ value: user.phone, type: "tel" }}
              title="Phone"
            />
          </li>
          <li>
            <DetailInfo
              icon={<FontAwesomeIcon icon={faHome} />}
              body={{
                value: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
                type: "text",
              }}
              title="Address"
            />
          </li>
          <li>
            <DetailInfo
              icon={<FontAwesomeIcon icon={faBuilding} />}
              body={{
                value: [
                  user.company.name,
                  user.company.catchPhrase,
                  user.company.bs,
                ],
                type: "listText",
              }}
              title="Company"
            />
          </li>
          <li>
            <DetailInfo
              icon={<FontAwesomeIcon icon={faSitemap} />}
              body={{ value: user.website, type: "link" }}
              title="Site"
            />
          </li>
        </ul>
        <div className="tabs-block">
          <Tabs />
        </div>
      </div>
    </div>
  );
};
