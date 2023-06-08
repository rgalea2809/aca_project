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
  activeFeatures,
  onActiveLayerNameChange,
  activeLayerName,
  onActiveGeoJsonLayerChange,
  activeGeoJsonLayer,
}) {
  const handleLayerChange = (newLayerName) => {
    switch (newLayerName) {
      case "lakes":
        console.log("Changed to lakes");
        onActiveLayerNameChange("lakes");
        onFeaturesChange(LakesMin.features);
        onActiveGeoJsonLayerChange(LakesMin);
        break;
      case "countries":
        console.log("Changed to countries");
        onActiveLayerNameChange("countries");
        onFeaturesChange(CountriesLayer.features);
        onActiveGeoJsonLayerChange(CountriesLayer);
        break;
      default:
        onActiveLayerNameChange(null);
    }
  };

  const handleLayersRadioChange = (_, value) => {
    if (activeLayerName === value) {
      onActiveLayerNameChange(null);
      return;
    }

    handleLayerChange(value);
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/4 bg-white">
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
        <OlMap
          features={activeFeatures}
          selectedGeoJsonLayer={activeGeoJsonLayer}
        />
      </div>
    </div>
  );
}
