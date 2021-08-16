import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEditContext } from "../../../contexts/PostContext";
import Container from "../../Others/Container/Container";
import Toggle from "../../Others/Toggle/Toggle"
import Moderator from "../Moderator/Moderator";
import admin from "./admin.module.css";

export default function Admin() {

  const { on } = useEditContext()

  return (
    <>
      {
        !on.left ?
          <div className={admin.container}>
            <div className={admin.wrapper}>
              <Container
                move={["Edit", "Delete"]}
                title={"Users List"}
                userer={true}
              />
            </div>
          </div>
          :
          <Moderator />
      }
      <Toggle />
    </>
  );
}
