import Link from "next/link";
import { Stack } from "@mui/material";

import SearchBar from "@/app/components/SearchBar";
import { logo } from "@/app/utils/constants";

export default function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
}
