import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          padding: "30px",
          width: "350px",
          flex: "0 0 350px",
          background: "#303030",
          minHeight: "100vh",
          "@media screen and (max-width: 767px)": {
            width: "100%",
            flex: "0 0 100%",
            padding: "30px",
            minHeight: "auto",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#fff",
            marginBottom: "5px",
          }}
        >
          Welcome
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#fff",
            marginBottom: "5px",
          }}
        >
          let's start your journey
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Typography>
      </Box>
    </>
  );
};

export default Sidebar;
