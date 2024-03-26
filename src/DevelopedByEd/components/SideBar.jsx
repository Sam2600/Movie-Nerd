/* eslint-disable react/prop-types */
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BuildCircle, Upcoming } from "@mui/icons-material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";

export const SideBar = ({ collapsed }) => {
  return (
    <div>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <Link to={"/"}>
            <MenuItem icon={<FaHome size={20} />}> Home </MenuItem>
          </Link>
          <Link to={"/testing"}>
            <MenuItem icon={<BuildCircle />}> Testing </MenuItem>
          </Link>
          <Link to={"/testing"}>
            <MenuItem icon={<Upcoming />}> Upcommings </MenuItem>
          </Link>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <Link to={"/testing"}>
              <MenuItem icon={<TimelineRoundedIcon />}>Timeline Chart</MenuItem>
            </Link>
            <Link to={"/testing"}>
              <MenuItem icon={<BubbleChartRoundedIcon />}>
                Bubble Chart
              </MenuItem>
            </Link>
          </SubMenu>
          <Link to={"/logout"}>
            <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};
