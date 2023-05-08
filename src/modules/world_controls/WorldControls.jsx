import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FormGroup } from "@mui/material";

export default function WorldControls({
  onLayerChange,
  onLayerHeightChange,
  onLayerCapColorChange,
  initialCapColor,
}) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [currentLayer, setLayer] = React.useState(null);
  const [heightSliderValue, setHeightSliderValue] = React.useState(0);

  const handleRadioLayerChange = (event, value) => {
    setLayer(value);
    onLayerChange(value);
  };

  const handleHeightSliderChagne = (event, newValue) => {
    setHeightSliderValue(newValue);
    onLayerHeightChange(newValue / 100);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Capas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Activa</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={currentLayer}
              onChange={handleRadioLayerChange}
            >
              <FormControlLabel
                value="countries"
                control={<Radio />}
                label="Paises"
              />
              <FormControlLabel
                value="lakes"
                control={<Radio />}
                label="Lagos"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Estilo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Altura de Capas
            </FormLabel>
            <Slider
              aria-label="Volume"
              value={heightSliderValue}
              onChange={handleHeightSliderChagne}
            />
            <FormLabel id="demo-radio-buttons-group-label">
              Color de Lados de polígono
            </FormLabel>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{"Opciones"}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
