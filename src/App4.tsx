// npm install @material-ui/core
//npm install @material-ui/icons
//export default function App(){...}
//-------whate ever the name is of the function-----------

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Container } from "@material-ui/core";
//------
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Badge from "@material-ui/core/Badge";
//------
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

//------
interface ChipData {
  key: number;
  label: string;
}
//------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
      position: "relative",
    },
    delete: {
      position: "absolute",
      top: 0,
      right: 0,
      color: "white",
    },
    cardContent: {
      flexGrow: 1,
    },
    //-----
    chip: {
      margin: theme.spacing(0.5),
    },
    fab: {
      margin: theme.spacing(2),
    },
    //-----
  })
);

export default function SearchAppBar() {
  const classes = useStyles();
  //------
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: "A" },
    { key: 1, label: "B" },
    { key: 2, label: "C" },
    { key: 3, label: "D" },
    { key: 4, label: "E" },
    { key: 5, label: "F" },
    { key: 6, label: "G" },
    { key: 7, label: "H" },
    { key: 8, label: "I" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  const handleAdd = () => () => {
    const newChipData = [...chipData, { key: 9, label: "J" }];
    setChipData(newChipData);

    // setChipData((chips) => {
    //   chips.push({ key: 9, label: "J" });
    //   return [...chips];
    // });
  };

  //--------

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {chipData.map((data) => (
                <Grid
                  item
                  key={data.key}
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.card}
                >
                  <Badge
                    color="secondary"
                    badgeContent=" X"
                    onClick={handleDelete(data)}
                  ></Badge>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`https://source.unsplash.com/random?key=${data.key}`}
                      title="Image title"
                    ></CardMedia>
                  </Card>
                </Grid>
              ))}
              <Tooltip title="Add" aria-label="add">
                <Fab color="primary" className={classes.fab}>
                  <AddIcon onClick={handleAdd()} />
                </Fab>
              </Tooltip>
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}
