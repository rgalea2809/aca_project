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
import Switch from "@mui/material/Switch";
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
  onAutoRotateChange,
  onLayerHeightChange,
  onLayerCapColorChange,
  initialCapColor = "#ff0000",
  onActiveToolChange,
}) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [currentLayer, setLayer] = React.useState(null);
  const [shouldAutoRotate, setShouldAutoRotate] = React.useState(true);
  const [heightSliderValue, setHeightSliderValue] = React.useState(0);
  const [polygonCapColor, setPolygonCapColor] = React.useState(initialCapColor);
  const [activeTool, setActiveTool] = React.useState(null);

  const handleRadioLayerChange = (_, value) => {
    setLayer(value);
    onLayerChange(value);
  };

  const handleShouldAutoRotateChange = (event) => {
    setShouldAutoRotate(event.target.checked);
    onAutoRotateChange(event.target.checked);
  };

  const handleHeightSliderChagne = (_, newValue) => {
    setHeightSliderValue(newValue);
    onLayerHeightChange(newValue / 100);
  };

  const handlePolygonCapColorChange = (newValue) => {
    setPolygonCapColor(newValue);
    onLayerCapColorChange(newValue);
  };

  const handleActiveToolChange = (event) => {
    if (event.target.value == activeTool) {
      setActiveTool(null);
      onActiveToolChange(null);
    } else {
      setActiveTool(event.target.value);
      onActiveToolChange(event.target.value);
    }
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

  const drawerItems = (anchor) => (
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
            <FormControlLabel
              control={
                <Switch
                  checked={shouldAutoRotate}
                  onChange={handleShouldAutoRotateChange}
                />
              }
              label="Rotación Automática"
            />

            <FormLabel id="demo-radio-buttons-group-label">
              Altura de Capas
            </FormLabel>
            <Slider
              aria-label="Volume"
              value={heightSliderValue}
              onChange={handleHeightSliderChagne}
            />

            <FormLabel id="demo-radio-buttons-group-label">
              Color de polígono
            </FormLabel>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={polygonCapColor}
              onChange={(e) => handlePolygonCapColorChange(e.target.value)}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Herramientas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Selecciona una herramienta
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={activeTool}
            >
              <FormControlLabel
                value="twoPointDistance"
                control={<Radio onClick={handleActiveToolChange} />}
                label="Distancia entre 2 puntos"
              />
            </RadioGroup>
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
            {drawerItems(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
