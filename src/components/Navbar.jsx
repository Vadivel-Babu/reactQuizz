import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Sun from "../UI/Sun";
import Moon from "../UI/Moon";
import { NavLink } from "react-router-dom";
const Toggle = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#A729F5" : "#A729F5",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#A729F5" : "#A729F5",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Navbar = ({ title, img }) => {
  return (
    <div className="flex justify-between px-3 py-4">
      <div className="flex gap-3">
        {img && (
          <img src={`/${img}.png`} className="w-10 h-10" alt={title || ""} />
        )}

        <NavLink to="/" className="font-bold text-3xl capitalize ">
          {title || ""}
        </NavLink>
      </div>
      {false && (
        <div className="flex justify-end items-center gap-2">
          <Sun />
          <Toggle />
          <Moon />
        </div>
      )}
    </div>
  );
};

export default Navbar;
