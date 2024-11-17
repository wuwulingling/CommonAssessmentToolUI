import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Paper,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { handleSaveReport } from "./ReportGenerate";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
    const { id, selectedUser, probability, interventions } = location.state || {
      id: null,
      selectedUser: {},
      probability: 0,
      interventions: [],
    };

  const handleSaveReportClick = (format) => {
    console.log(selectedUser);
    handleSaveReport(format, selectedUser, probability, interventions);
  };

  const handleBackToForm = () => {
    if (id !== undefined && id !== null) {
      navigate(`/client/${id}`);
    } else {
      navigate('/form', { state: { selectedUser } });
    }
  };

  const formatIntervention = (intervention) => {
    if (Array.isArray(intervention) && intervention.length === 2) {
      const percentage = intervention[0];
      const types = intervention[1];
      if (Array.isArray(types)) {
        return {
          types: types.join(", "),
          percentage: `${percentage.toFixed(1)}%`,
        };
      }
    }
    return { types: "Invalid data", percentage: "" };
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Return to Work Assessment Results
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Probability of Return to Work:
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            {probability.toFixed(2)}%
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recommended Interventions:
          </Typography>
          <List>
            {interventions.map((intervention, index) => {
              const formatted = formatIntervention(intervention);
              return (
                <ListItem key={index}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "body1" }}
                    primary={
                      <>
                        {formatted.types}:{" "}
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold", color: "primary.main" }}
                        >
                          {formatted.percentage}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSaveReportClick("pdf")}
              fullWidth
            >
              Save as PDF
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleSaveReportClick("csv")}
              fullWidth
            >
              Save as CSV
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" onClick={handleBackToForm} fullWidth>
              Back to Form
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ResultPage;
