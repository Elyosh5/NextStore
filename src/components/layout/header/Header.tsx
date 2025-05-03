"use client";
import SearchIcon from "@mui/icons-material/Search";
import scss from "./Header.module.scss";
import { alpha, InputBase, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <h1 id={scss.logo}>TechStore</h1>
            <MenuIcon className={scss.menuIcon} />
          </div>

          <nav>
            <a href="">Home</a>
            <a href="">Catalog</a>
          </nav>
          <div className={scss.actions}>
            <Search>
              <StyledInputBase
                placeholder="Search products..."
                className={scss.search}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <SearchIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
