import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Blog by <a href="https://backendblake.com">Blake</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      My Github{" "}
      <a href="https://github.com/blakedav208">
        Here
      </a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/backendBlake">@backendBlake</a>
    </Text>
  </Box>
)

export default Footer
