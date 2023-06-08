import * as React from "react";
import OlMap from "../ol_map/ol_map";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Lakes from "./../../datasets/lakes_stanford/lakes_stanford";
import LakesMin from "./../../datasets/lakes_stanford/lakes_stanford_min";
import CountriesLayer from "./../../datasets/countries";

export default function GeoPortal({
  onFeaturesChange,
  onActiveLayerNameChange,
  activeLayerName,
}) {
  const [activeLayer, setActiveLayer] = React.useState(null);
  const [activeLayerName, setActiveLayerName] = React.useState(null);

  const handleLayerChange = (newLayerName) => {
    switch (newLayerName) {
      case "lakes":
        console.log("Changed to lakes");
        setActiveLayer(LakesMin.features);
        setActiveLayerName("lakes");
        onFeaturesChange(LakesMin.features);
        break;
      case "countries":
        console.log("Changed to countries");
        setActiveLayer(CountriesLayer.features);
        setActiveLayerName("countries");
        onFeaturesChange(CountriesLayer.features);
        break;
      default:
        setActiveLayer(null);
    }
  };

  const handleLayersRadioChange = (_, value) => {
    handleLayerChange(value);
    onActiveLayerNameChange(value);
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <Stack spacing={2}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Capas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Activa
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={activeLayerName}
                  onChange={handleLayersRadioChange}
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
        </Stack>
      </div>

      <div className="basis-3/4">
        <OlMap />
      </div>
    </div>
  );
}
