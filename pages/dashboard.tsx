import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { tokens } from "../theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../components/nivo-viz-components/Header";
import LineChart from "../components/nivo-viz-components/LineChart";
import BarChart from "../components/nivo-viz-components/BarChart";
import StatBox from "../components/nivo-viz-components/StatBox";
import ProgressCircle from "../components/nivo-viz-components/ProgressCircle";
import { useQuery } from "react-query";
import { fetchAllPlayers } from "../api/draftPlayers";
import percentPerRound, {
  DraftRoundPercentage,
} from "../utils/roundPercentage";
import filterPlayers, { Player } from "../utils/filterPlayers";

function Dashboard(): React.ReactNode {
  const [filterType, setFilterType] = useState<string>("Position");
  let playerPercentage: DraftRoundPercentage[] = [];
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data, error, isLoading } = useQuery(
    "players",
    () => fetchAllPlayers(),
    { staleTime: Infinity } // draft data should be unchanged
  );

  if (data) {
    // playerPercentage = percentPerRound(data);
    const filteredPlayers: Player[] = filterPlayers(data, {
      position: "QB",
      team: null,
    });
  }

  function updateFilters(filter: string): void {
    setFilterType(filter);
  }

  return (
    <div className="app">
      <Sidebar updateFilterType={updateFilters} filter={filterType} />
      <main className="content">
        <Topbar />
        <Box m="20px">
          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

            <Box
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <Button>
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                Select Positions
              </Button>
            </Box>
          </Box>

          {/* GRID & CHARTS */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            {/* ROW 1 */}
            <Box
              gridColumn="span 3"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <StatBox
                title="431,225"
                subtitle="Sales Obtained"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>

            {/* ROW 2 */}
            <Box
              gridColumn="span 12"
              gridRow="span 3"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={colors.greenAccent[500]}
                  >
                    $59,342.32
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="400px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </Box>

            {/* ROW 3 */}
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              p="30px"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <Typography variant="h5" fontWeight="600">
                Campaign
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                <ProgressCircle size="125" />
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  sx={{ mt: "15px" }}
                >
                  $48,352 revenue generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
              </Box>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              overflow="auto"
              sx={{
                backgroundColor: colors.primary[400],
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="15px"
                sx={{
                  borderBottom: `4px solid ${colors.primary[500]}`,
                  colors: colors.grey[100],
                }}
              >
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Percent Per Round Breakdown
                </Typography>
              </Box>
              {playerPercentage.map(
                ({ draftRound, totalDraftedPlayers, percentageOfTotal }) => (
                  <Box
                    key={draftRound}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                  >
                    <Box>
                      <Typography color={colors.grey[100]}>
                        Round: {draftRound}
                      </Typography>
                      <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                      >
                        {totalDraftedPlayers}
                      </Typography>
                    </Box>
                    {/* <Box color={colors.grey[100]}>{transaction.date}</Box> */}
                    <Box
                      p="10px"
                      borderRadius="4px"
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                      }}
                    >
                      {Math.floor((percentageOfTotal / 1) * 100)}%
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default Dashboard;
