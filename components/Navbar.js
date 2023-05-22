import { useState, useContext } from "react";
import RegisterContext from "../context/RegisterId";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar({}) {
  let {
    regTerm,
    onChange,
    sidePannel,
    setSidePannel,
    invalidRegId,
    validRegId,
  } = useContext(RegisterContext);
  let router = useRouter();
  function submitHandle(e) {
    e.preventDefault();
    router.push(`/${e.target.user.value}`);
  }
  function toggleSidePanel() {
    setSidePannel((preSide) => !preSide);
  }

  return (
    <nav>
      <div className="left-bar">
        {<FaBars onClick={toggleSidePanel} />}
        {/* {validRegId && (
          // <FaBars className="menu-icon" onClick={toggleSidePanel} />
        )} */}
        <h1>Surya</h1>
      </div>
      <form onSubmit={submitHandle}>
        {invalidRegId && <span className="invalid-sym">!</span>}
        <input
          className={invalidRegId ? "invalid-reg-id" : ""}
          onChange={onChange}
          autoComplete="username"
          value={regTerm}
          placeholder="Register Id"
          autoFocus
          name="user"
        />
      </form>
    </nav>
  );
}
