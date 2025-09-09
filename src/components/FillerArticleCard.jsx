import {
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";

export function FillerArticleCard() {
  return (
    <Paper
      elevation={10}
      sx={{
        width: 400,
        height: 500,
        margin: 1,
        alignContent: "center",
        backgroundColor: "black",
        padding: 0.5,
      }}
    >
      <Card
        sx={{
          maxWidth: 380,
          height: 598,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          height: "100%",
          backgroundColor: "var(--placeholder-background)",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: 30,
              width: 380,
              height: 50,
              backgroundColor: "var(--placeholder-color)",
            }}
          >
            {" "}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 30,
              width: 380,
              height: 300,
              backgroundColor: "var(--placeholder-color)",
              marginTop: 2,
            }}
          >
            {" "}
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              fontSize: 30,
              width: 100,
              height: 30,
              backgroundColor: "var(--placeholder-color)",
              marginTop: 1,
              marginRight: -5.5,
              marginLeft: "auto",
            }}
          ></Box>
          <Container
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-end",
              height: 40,
              alignSelf: "flex-end",
              gap: 0.25,
              marginTop: "auto",
              marginRight: 0,
              marginBottom: 1,
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                fontSize: 30,
                width: 100,
                height: 30,
                backgroundColor: "var(--placeholder-color)",
                marginTop: 1,
                marginLeft: "auto",
              }}
            ></Box>
            <Box
              sx={{
                textAlign: "center",
                fontSize: 30,
                width: 100,
                height: 30,
                backgroundColor: "var(--placeholder-color)",
                marginTop: 1,
                marginLeft: "auto",
              }}
            >
              {" "}
            </Box>
            <Box
              sx={{
                textAlign: "center",
                fontSize: 30,
                width: 100,
                height: 30,
                backgroundColor: "var(--placeholder-color)",
                marginTop: 1,
                marginRight: -5.5,
                marginLeft: "auto",
              }}
            >
              {" "}
            </Box>
          </Container>
        </CardContent>

        <Box
          sx={{
            textAlign: "center",
            fontSize: 30,
            width: 200,
            height: 30,
            backgroundColor: "var(--placeholder-color)",
            marginTop: 1,
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 1,
          }}
        />
      </Card>
    </Paper>
  );
}
